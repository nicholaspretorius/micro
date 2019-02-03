const mongoose = require("mongoose");
const Mail = require("./../models/mail");

const pingHandler = (_, res) => {
  res.json({ ping: "pong" });
};

const mailHandler = async (_, res) => {
  const mails = await Mail.find();
  res.send(mails);
};

const singleMailHandler = async (req, res) => {
  const mail = await Mail.findById(req.params.id);
  res.send(mail);
};

module.exports = server => {
  server
    .get("/ping", pingHandler)
    .get("/mail", mailHandler)
    .get("/mail/:id", singleMailHandler);
};
