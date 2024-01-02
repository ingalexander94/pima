const knex = require("knex");
const envs = require("../config/environments");

let database = null;

const connectCommonDB = () => {
  return new Promise((resolve, reject) => {
    if (database) {
      resolve(database);
      return;
    }
    database = knex({
      client: "mysql",
      connection: {
        user: envs.USERNAME_DB,
        host: envs.HOST_DB,
        port: envs.PORT_DB,
        database: envs.NAME_DB,
        password: envs.PASSWORD_DB,
      },
      pool: { min: 2, max: 20 },
    });
    database
      .raw("SELECT 1+1 as result")
      .then(() => {
        console.log("DB Common is online");
        resolve(database);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = { connectCommonDB };
