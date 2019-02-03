const server = require("express")();
const schema = require("./data/apollo");
require("dotenv").config();

schema.applyMiddleware({ app: server });

const PORT = process.env.GATEWAY_PORT || 4000;

server.get("/", (req, res) => {
  res.json({ hello: "world" });
});

server.listen(PORT, () => {
  console.log(`Listening to Gateway on ${PORT}`);
});
