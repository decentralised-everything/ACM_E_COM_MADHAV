const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  money: {
    type: Number, 
    required: true,
    default: 1000
  }
});

module.exports = User = mongoose.model("user", userSchema);
