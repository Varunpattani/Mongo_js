const mongoose = require("mongoose");

const schema = mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
});

module.exports = mongoose.model("records", schema);
