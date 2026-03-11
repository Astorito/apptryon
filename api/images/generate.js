// Images arrive as base64 strings — raise the body limit well above the default 1 MB.
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "20mb",
    },
  },
};

function parseIncomingBody(body) {
  if (!body) return {};
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  if (typeof body === "object") return body;
  return {};
}

export default async function handler(req, res) {
  try {
    const incoming = parseIncomingBody(req.body);
    const payload = {
      ...incoming,
      // Fallback server-side key to avoid auth failures when body parsing drops apiKey.
      apiKey: incoming.apiKey || process.env.TRYON_API_KEY || "tryon_mlqqsbsv_rhyiqjlu",
    };

    const upstreamRes = await fetch("https://try-on-cursor.vercel.app/api/images/generate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "origin": "https://try-on-cursor.vercel.app",
        "referer": "https://try-on-cursor.vercel.app/",
      },
      body: JSON.stringify(payload),
    });

    const contentType = upstreamRes.headers.get("content-type") || "application/json";
    const bodyText = await upstreamRes.text();
    res.setHeader("content-type", contentType);
    res.status(upstreamRes.status).send(bodyText);
  } catch (err) {
    res.status(502).json({
      error: "Generate proxy failed",
      details: err?.message || String(err),
    });
  }
}
