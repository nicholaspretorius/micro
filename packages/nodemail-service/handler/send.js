const nodemailer = require("nodemailer");
require("dotenv").config();
const { transport, mailOptions } = require("./../config");

module.exports = async mail => {
  let transporter = nodemailer.createTransport(transport);
  let mail = mailOptions;

  let result = await transporter.sendMail(mail);

  console.log("Message sent: ", result);
};
