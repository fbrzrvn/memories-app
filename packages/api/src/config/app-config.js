require("dotenv").config();

const {
  NODE_ENV = "development",
  MONGO_DB_URL_PRODUCTION,
  MONGO_DB_URL_DEVELOPMENT,
  PORT = 4000,
} = process.env;

const baseConfig = {
  app: {
    port: PORT,
  },
  client: {
    url: process.env.CLIENT_URL,
  },
};

const config = {
  development: {
    ...baseConfig,
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
  },
  production: {
    ...baseConfig,
    db: {
      url: MONGO_DB_URL_PRODUCTION,
    },
  },
};

module.exports = {
  config: config[NODE_ENV],
};
