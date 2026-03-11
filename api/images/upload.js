import { proxyRequest } from "../_proxy.js";

export default async function handler(req, res) {
  await proxyRequest(req, res, "/api/images/upload");
}
