const Objs = require("../models/object");
const UpdateObject = async (req, res) => {
  switch (res.locals.bidStatus) {
    case "sync":
      res.locals.object.save();
      break;
    case "over":
      res.locals.object.remove();
      break;
    default:
      break;
  }
};

module.exports = UpdateObject;
