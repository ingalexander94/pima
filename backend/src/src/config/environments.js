const envs = {
  PORT: parseInt(process.env.PORT || "3000"),
  HOST_DB: process.env.HOST_DB || "localhost",
  PORT_DB: parseInt(process.env.PORT_DB || "3306"),
  USERNAME_DB: process.env.USERNAME_DB || "",
  PASSWORD_DB: process.env.PASSWORD_DB || "",
  NAME_DB: process.env.NAME_DB || "",
  JWT_SEED: process.env.JWT_SEED || "",
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || "",
  EMAIL_USER: process.env.EMAIL_USER || "",
  EMAIL_HOST: process.env.EMAIL_HOST || "",
  EMAIL_PORT: parseInt(process.env.EMAIL_PORT || "465"),
};

module.exports = envs;
