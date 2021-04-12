const Objs = require("../models/object");
const {StopChecking} = require("./CheckBids")
const UpdateObject = async (req, res) => {
  switch (res.locals.bidStatus) {
    case "sync":
      res.locals.object.save();
      break;
    case "over":
      StopChecking();
      res.locals.object.remove();
      break;
    default:
      break;
  }
};

module.exports = UpdateObject;
