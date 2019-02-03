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
        PORT: process.env.PORT
      }
    },
    {
      name: "DB Service",
      script: basePath + "/db-service/server.js",
      autorestart: true,
      watch: true,
      env: {
        PORT: process.env.PORT,
        DB: process.env.DB
      }
    }
  ]
};
