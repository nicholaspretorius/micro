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

      ch.sendToQueue(q, Buffer.from("Hello from RabbitMQ2!"));
    });
  }
);
