const psl = require("psl");
const { request, response } = require("express");
const { createNamespace } = require("continuation-local-storage");
const { getConnectionBySubdomain } = require("../database/manager");
const { parseDomain } = require("../helpers/formatter");

const nameSpace = createNamespace("unique context");

const resolveClientDBConnection = (req = request, res = response, next) => {
  const origin = req.get("origin");
  const re = /^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/gi;
  const result = re.exec(origin);
  const rawDomain = parseDomain(result);
  const clean = psl.parse(rawDomain);
  const { subdomain } = clean;
  nameSpace.run(() => {
    getConnectionBySubdomain(subdomain).then((connection) => {
      if (connection === undefined)
        return res.json({ message: "Client not exist" });
      if (connection === null)
        return res.json({ message: "Client database not config" });
      nameSpace.set("connection", connection);
      next();
    });
  });
};

module.exports = resolveClientDBConnection;
