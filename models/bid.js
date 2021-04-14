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

}); 

module.exports = mongoose.model("Bids", Bids);
