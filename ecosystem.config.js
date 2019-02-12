const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const basePath = path.join(__dirname, "/packages");

module.exports = {
  apps: [
    {
      name: "Gateway",
      script: basePath + "/gateway/server.js",

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        GATEWAY_PORT: process.env.GATEWAY_PORT,
        DB_PORT: process.env.DB_PORT,
        AMQP_URI: process.env.AMQP_URI
      }
    },
    {
      name: "DB Service",
      script: basePath + "/db-service/server.js",
      autorestart: true,
      watch: true,
      env: {
        DB_PORT: process.env.DB_PORT,
        DB_URI: process.env.DB_URI
      }
    },
    {
      name: "Email Service",
      script: basePath + "/email-service/index.js",
      autorestart: true,
      watch: true,
      env: {
        DB_PORT: process.env.DB_PORT,
        DB_URI: process.env.DB_URI,
        AMQP_URI: process.env.AMQP_URI,
        EMAIL_PORT: process.env.EMAIL_PORT,
        MJ_PUBLIC_KEY: process.env.MJ_PUBLIC_KEY,
        MJ_PRIVATE_KEY: process.env.MJ_PRIVATE_KEY
      }
    },
    {
      name: "Nodemail Service",
      script: basePath + "/nodemail-service/index.js",
      autorestart: true,
      env: {
        NM_SERVICE: process.env.NM_SERVICE,
        NM_HOST: process.env.NM_HOST,
        NM_PORT: process.env.NM_PORT,
        NM_AUTH: process.env.NM_AUTH,
        NM_USER: process.env.NM_USER,
        NM_CLIENT_ID: process.env.NM_CLIENT_ID,
        NM_CLIENT_SECRET: process.env.NM_CLIENT_SECRET,
        NM_TOKEN: process.env.NM_TOKEN,
        NM_REFRESH_TOKEN: process.env.NM_REFRESH_TOKEN
      }
    }
  ]
};
