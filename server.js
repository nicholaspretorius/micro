require("dotenv").config();
const morgan = require("morgan");
const winston = require("./config/winston");
const server = require("express")();
const axios = require("axios");

server.use(morgan("combined", { stream: winston }));

const PORT = process.env.PORT || 4000;

server.get("/", async (req, res) => {
  try {
    const result = await axios.get("http://localhost:3000/");
    res.send(result.data);
  } catch (e) {
    console.error(e);
  }
});

server.get("/ping", (req, res) => {
  res.send("Ping!");
});

server.listen(PORT, () => {
  console.info(`Server listening on port: ${PORT}...`);
});
