const Mail = require("./../models/mail");

const mailHandler = async (req, res) => {
  const mail = new Mail({
    subject: req.body.subject,
    receiver: req.body.receiver,
    content: req.body.content
  });

  await mail.save();

  res.json(mail);
};

module.exports = server => {
  server.post("/mails", mailHandler);
};
