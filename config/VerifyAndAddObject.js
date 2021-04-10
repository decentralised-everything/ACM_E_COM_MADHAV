// verify if the sender is the owner
// verify the details of the object that is submitted
// make a new Objs object into req
// even push the object into the database

const Objects = require("../models/object");

const VerifyAndAddObject = async (req, res, next) => {
  if (req.body.object.owner.name === res.locals.user.name) {
    const object = new Object(req.body.object);
    if (!object.validateSync()) {
      object.save();
      res.locals.object = object;
    } else {
      res.send("invalid object details sent");
      return res.end();
    }
  } else {
    res.send(`umm, trying to act like ${req.body.object.owner.name}?`);
    return res.end();
  }
  next();
};

module.exports = ObtainObject;
