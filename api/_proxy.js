const UPSTREAM = "https://try-on-cursor.vercel.app";

/**
 * Proxy a request to the upstream backend.
 * - Strips Origin/Referer from browser so the upstream sees a server-side call.
 * - Replaces Origin with the upstream's own domain so any same-origin checks pass.
 */
export async function proxyRequest(req, res, upstreamPath) {
  const method = req.method || "GET";

  const headers = {
    // Spoof Origin to the upstream's own domain so its auth accepts the request.
    "origin":  UPSTREAM,
    "referer": UPSTREAM + "/",
  };
  if (req.headers["content-type"]) headers["content-type"] = req.headers["content-type"];
  if (req.headers["accept"])        headers["accept"]        = req.headers["accept"];
  if (req.headers["authorization"]) headers["authorization"] = req.headers["authorization"];

  const isBodyMethod = !["GET", "HEAD"].includes(method.toUpperCase());

  try {
    const upstreamRes = await fetch(`${UPSTREAM}${upstreamPath}`, {
      method,
      headers,
      body: isBodyMethod ? JSON.stringify(req.body ?? {}) : undefined,
    });

    const ct = upstreamRes.headers.get("content-type") ?? "";
    let body = await upstreamRes.text();

    // Rewrite absolute upstream URLs inside the widget script to relative paths
    // so all subsequent widget API calls also go through this proxy.
    if (ct.includes("javascript")) {
      body = body.split(UPSTREAM + "/api/").join("/api/");
    }

    if (ct) res.setHeader("content-type", ct);
    res.status(upstreamRes.status).send(body);
  } catch (err) {
    res.status(502).json({ error: "Upstream request failed", details: err?.message ?? String(err) });
  }
}
