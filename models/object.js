const mongoose = require("mongoose");

const objSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: Date.now,
  },
});

module.exports = obj = mongoose.model("obj", objSchema);
