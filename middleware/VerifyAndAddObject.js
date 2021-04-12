// verify if the sender is the owner
// verify the details of the object that is submitted
// make a new Objs object into req
// even push the object into the database

const Objects = require("../models/object");

const VerifyAndAddObject = async (req, res, next) => {
  if (req.body.object.owner.name === res.locals.user.name) {
    Objects.create(req.body.object, (err, object) => {
      if (err /* returns error or undefined*/) {
        res.status(500).send("invalid object details sent");
      } else {
        res.locals.object = object;
      }
    });
  } else {
    res.send(`umm, trying to act like ${req.body.object.owner.name}?`);
  }
  next();
};

module.exports = VerifyAndAddObject;
