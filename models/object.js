const mongoose = require("mongoose");
const Bids = require("./bid");
// can you put a schema object in another schema object? put owner as user type
const Objs = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId, //owner id
    ref: "Users",
    required: true,
  },
  bids: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Bids",
    }, // gotta sort this based on money and then grab the highest
  ],
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  duration: {
    type: Date,
    default: 86400000, // 1 day in millisecs
    required: true,
  },
});

module.exports = Objs = mongoose.model("Objs", Objs);
