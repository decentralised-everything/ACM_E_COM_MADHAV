const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  userType: {
    type: String, //{Noob, Buyer, Seller}
    required: true,
  },
});

module.exports = user = mongoose.model("user", userSchema);
