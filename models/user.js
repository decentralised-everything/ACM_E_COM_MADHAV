const mongoose = require("mongoose");

const Users = new mongoose.Schema({
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
    default: 1000,
  },
});

module.exports = mongoose.model("Users", Users);
