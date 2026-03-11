import { proxyRequest } from "../_proxy.js";

// Images arrive as base64 strings — raise the body limit well above the default 1 MB.
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "20mb",
    },
  },
};

export default async function handler(req, res) {
  await proxyRequest(req, res, "/api/images/generate");
}
