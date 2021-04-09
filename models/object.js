const mongoose = require("mongoose");
// can you put a schema object in another schema object? put owner as user type
const objSchema = new mongoose.Schema({
  owner:{
    type: String,
    required: true
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
