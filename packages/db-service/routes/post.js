const Mail = require("./../models/mail");

const mailHandler = async (req, res) => {
  let result;

  try {
    const mail = new Mail({
      subject: req.body.subject,
      receiver: req.body.receiver,
      content: req.body.content
    });

    result = await mail.save();
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
  server.post("/mail", mailHandler);
};
