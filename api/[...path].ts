const UPSTREAM_ORIGIN = "https://try-on-cursor.vercel.app";

function toArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function pickAllowedHeaders(headers: Record<string, string | string[] | undefined>) {
  const filtered: Record<string, string> = {};

  const contentType = headers["content-type"];
  const authorization = headers.authorization;
  const accept = headers.accept;
  const userAgent = headers["user-agent"];

  if (typeof contentType === "string") filtered["content-type"] = contentType;
  if (typeof authorization === "string") filtered.authorization = authorization;
  if (typeof accept === "string") filtered.accept = accept;
  if (typeof userAgent === "string") filtered["user-agent"] = userAgent;

  return filtered;
}

function buildTargetUrl(pathSegments: string[], query: Record<string, unknown>) {
  const url = new URL(`${UPSTREAM_ORIGIN}/api/${pathSegments.join("/")}`);

  Object.entries(query).forEach(([key, raw]) => {
    if (key === "path" || raw == null) return;
    if (Array.isArray(raw)) {
      raw.forEach((item) => url.searchParams.append(key, String(item)));
      return;
    }
    url.searchParams.append(key, String(raw));
  });

  return url.toString();
}

export default async function handler(req: any, res: any) {
  const segments = toArray(req.query?.path);
  const targetUrl = buildTargetUrl(segments, req.query ?? {});

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const method = req.method || "GET";
  const shouldSendBody = !["GET", "HEAD"].includes(method.toUpperCase());

  try {
    const upstreamResponse = await fetch(targetUrl, {
      method,
      headers: pickAllowedHeaders(req.headers ?? {}),
      body: shouldSendBody ? JSON.stringify(req.body ?? {}) : undefined,
    });

    const contentType = upstreamResponse.headers.get("content-type") ?? "";
    const textBody = await upstreamResponse.text();
    const isWidgetRequest = segments.join("/") === "widget";
    const isJavaScript = contentType.includes("javascript");

    let responseBody = textBody;
    if (isWidgetRequest && isJavaScript) {
      // Fuerza llamadas del widget a nuestro mismo origen.
      responseBody = responseBody
        .replaceAll(`${UPSTREAM_ORIGIN}/api/`, "/api/")
        .replaceAll(`${UPSTREAM_ORIGIN.replaceAll("/", "\\/")}\\/api\\/`, "/api/");
    }

    if (contentType) res.setHeader("content-type", contentType);
    res.status(upstreamResponse.status).send(responseBody);
  } catch (error) {
    res.status(502).json({
      error: "Proxy upstream request failed",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
