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
    required: Date.now,
  },
});

module.exports = obj = mongoose.model("obj", objSchema);
