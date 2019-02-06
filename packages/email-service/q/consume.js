const amqp = require("amqplib/callback_api");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "./../.env") });

const sendMail = require("./../handler/send");

module.exports = () => {
  const q = "test_q";

  amqp.connect(
    process.env.AMQP_URL,
    (err, conn) => {
      if (err) throw new Error(err);

      conn.createChannel((err, ch) => {
        if (err) throw new Error(err);

        ch.assertQueue(q, { durable: true });

        ch.consume(
          q,
          msg => {
            let email;

            try {
              email = JSON.parse(msg.content.toString());
              sendMail(email);
              console.log("Email: ", email);
            } catch (err) {
              console.log("Consumer error: ", err);
            }

            // ch.ack(msg);
          },
          { noAck: true }
        );
      });
    }
  );
};
