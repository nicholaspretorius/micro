const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  subject: { type: String, required: true },
  receiver: { type: String, required: true },
  content: { type: String, required: true }
});

const Mail = mongoose.model("Mail", schema);

module.exports = Mail;
