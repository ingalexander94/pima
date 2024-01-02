const knex = require("knex");
const { getNamespace } = require("continuation-local-storage");
const cache = require("memory-cache");
const { connectCommonDB } = require("./common");

async function getConstants() {
  let clients;
  const commonDBConnection = await connectCommonDB();
  clients = await commonDBConnection.select("*").from("clients");
  let connectionMap = [];
  connectionMap = clients
    .map((client) => {
      return {
        [client.subdomain]: async () => {
          let db = knex(createConnectionConfig(client));
          return new Promise((resolve, _) => {
            db.raw("SELECT 1")
              .then(() => {
                console.log(`DB Client ${client.subdomain} is online`);
                resolve(db);
              })
              .catch((_) => {
                resolve(null);
              });
          });
        },
      };
    })
    .reduce((prev, next) => {
      return Object.assign({}, prev, next);
    }, {});
  cache.put("constants", connectionMap);
}

function createConnectionConfig(client) {
  const clientDBConnetion = {
    client: "mysql",
    connection: {
      host: client.db_host,
      port: client.db_port,
      user: client.db_username,
      database: client.db_name,
      password: client.db_password,
    },
  };
  return clientDBConnetion;
}

async function getConnectionBySubdomain(subdomain) {
  let constants = cache.get("constants");
  if (!constants || !constants[subdomain]) {
    cache.clear();
    await getConstants();
  }
  constants = cache.get("constants");
  const connection = constants[subdomain];
  return connection ? await connection() : undefined;
}

function getConnection() {
  const nameSpace = getNamespace("unique context");
  const conn = nameSpace.get("connection");
  if (!conn) {
    throw "Connection is not set for any client database.";
  }
  return conn;
}

module.exports = {
  getConstants,
  getConnectionBySubdomain,
  getConnection,
};
