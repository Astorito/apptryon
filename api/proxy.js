const UPSTREAM = "https://try-on-cursor.vercel.app";

module.exports = async function handler(req, res) {
  const targetUrl = req.query?.url;
  if (!targetUrl) {
    return res.status(400).json({ error: "Missing url parameter" });
  }

  try {
    const upstreamRes = await fetch(targetUrl);
    const ct = upstreamRes.headers.get("content-type") ?? "application/octet-stream";
    const buffer = await upstreamRes.arrayBuffer();

    res.setHeader("content-type", ct);
    res.setHeader("cache-control", "public, max-age=3600");
    res.status(upstreamRes.status).send(Buffer.from(buffer));
  } catch (err) {
    res.status(502).json({ error: "Proxy fetch failed", details: err.message });
  }
};
