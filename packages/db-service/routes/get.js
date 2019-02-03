const mongoose = require("mongoose");
const Mail = require("./../models/mail");

const pingHandler = (_, res) => {
  res.json({ ping: "pong" });
};

const mailHandler = async (_, res) => {
  let result;

  try {
    result = await Mail.find();
  } catch (err) {
    result = err;
  }

  res.send({
    message: "DB response",
    service: "Database Service",
    status: 200,
    payload: result
  });
};

const singleMailHandler = async (req, res) => {
  let result;

  try {
    result = await Mail.findById(req.params.id);
  } catch (err) {
    result = err;
  }

  res.send({
    message: "DB response",
    service: "Database Service",
    status: 200,
    payload: result
  });
};

module.exports = server => {
  server
    .get("/ping", pingHandler)
    .get("/mail", mailHandler)
    .get("/mail/:id", singleMailHandler);
};
