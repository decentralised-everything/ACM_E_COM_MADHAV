const mongoose = require("mongoose");
// can you put a schema object in another schema object? put owner as user type
const objSchema = new mongoose.Schema({
  owner:{
    type: String, //owner id
    required: true
  },
  bids:[
    {
      bidder, money, id // id = hash
    } // gotta sort this based on money and then grab the highest
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Obj = mongoose.model("Obj", objSchema);
