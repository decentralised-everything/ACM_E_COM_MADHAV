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
  },
  userType: {
    type: String, //{Noob, Buyer, Seller}
    default: "Noob",
    required: true,
  },
});

module.exports = User = mongoose.model("user", userSchema);
