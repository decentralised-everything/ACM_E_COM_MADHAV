const mongoose = require("mongoose");

const objSchema = new mongoose.Schema({
  owner:{
    type: mongoose.Schema.Types.ObjectId,
  },
  bids:[
    {
      owner
    }
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Obj = mongoose.model("Obj", objSchema);
