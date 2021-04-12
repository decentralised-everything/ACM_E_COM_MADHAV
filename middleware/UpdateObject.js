
const {StopChecking} = require("./CheckBids")
const UpdateObject = async (req, res) => {
  switch (res.locals.bidStatus) {
    case "sync":
      res.locals.object.save();
      break;
    case "over":
      StopChecking();
      res.locals.object.remove();
      res.locals.object = undefined;
      break;
    default:
      break;
  }
};

module.exports = UpdateObject;
