const mongoose = require("mongoose");
const Mail = require("./../models/mail");

module.exports = server => {
  server.get("/", async (_, res) => {
    const mail = new Mail({
      subject: "First Email",
      receiver: "nicholaspre@icloud.com",
      content: "Hello Nicholas!"
    });

    await mail.save();

    res.json(mail);
  });

  server.get("/mails", async (_, res) => {
    const mails = await Mail.find();
    res.json(mails);
  });
};
