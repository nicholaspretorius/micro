require("dotenv").config();

const Mailjet = require("node-mailjet").connect(
  process.env.MJ_PUBLIC_KEY,
  process.env.MJ_PRIVATE_KEY
);

module.exports = async mail => {
  const request = await Mailjet.post("send").request({
    FromEmail: "nicholaspre@icloud.com",
    FromName: "Nicholas Pretorius",
    Subject: mail.subject,
    "Text-part": mail.content,
    Recipients: [
      {
        Email: mail.receiver
      }
    ]
  });

  console.log("Mailjet: ", request.body);
};
