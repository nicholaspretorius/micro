const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  const db = process.env.DB_URI;
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => console.log(`Connected to ${db}`));
};
