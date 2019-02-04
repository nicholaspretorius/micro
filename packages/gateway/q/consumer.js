const amqp = require("amqplib/callback_api");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "./../.env") });

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
          console.log("Message: ", msg.content.toString());
        },
        { noAck: true }
      );
    });
  }
);
