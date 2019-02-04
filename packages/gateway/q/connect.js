const amqp = require("amqplib/callback_api");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "./../.env") });

const q = "test_q";
let channel;

amqp.connect(
  process.env.AMQP_URL,
  (err, conn) => {
    if (err) throw new Error(err);

    conn.createChannel((err, ch) => {
      if (err) throw new Error(err);

      ch.assertQueue(q, { durable: true });

      channel = ch;

      // ch.sendToQueue(q, Buffer.from("Hello from RabbitMQ2!"));
    });

    // setTimeout(() => {
    //   conn.close();

    //   process.exit(0);
    // }, 1000);
  }
);

const pushMessagesToQ = msg => {
  if (!channel) setTimeout(pushMessagesToQ(msg), 1000);

  channel.sendToQueue(q, Buffer.from(msg));

  return { message: "done" };
};

module.exports = pushMessagesToQ;
