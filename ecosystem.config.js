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
    }
  ]
};
