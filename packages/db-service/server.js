const server = require("express")();
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

server
  .use(bodyParser.json())
  .listen(PORT, () => console.log(`DB Service listening on port ${PORT}`));
