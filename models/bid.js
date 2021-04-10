const mongoose = require("mongoose");
const Users = require("./user");
const Bids = new mongoose.Schema({
  bidder: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
    required: true,
  },
  money: {
    type: Number,
    required: true,
  },

  // money, id // id = hash
}); // gotta sort this based on money and then grab the highest

module.exports = Bids = mongoose.model("Bids", Bids);
