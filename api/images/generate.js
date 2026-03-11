const { proxyRequest } = require("../_proxy");

module.exports = async function handler(req, res) {
  await proxyRequest(req, res, "/api/images/generate");
};
