const mongoose = require("mongoose");

const info = mongoose.model(
  "info",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    telephone: String,
    ssn: String,
    address: String
  })
);

module.exports = info;
