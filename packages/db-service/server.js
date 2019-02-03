const server = require("express")();
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.DB_PORT || 3001;

server.use(bodyParser.json());

require("./db")();
require("./routes/get")(server);
require("./routes/post")(server);

server.listen(PORT, () => console.log(`DB Service listening on port ${PORT}`));
