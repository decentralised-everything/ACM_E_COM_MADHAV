const Objects = require("../models/object");

const ObtainObject = async (req, res, next) => {
  const { obj_id } = req.params;
  Objects.findOne({ _id: obj_id }, (err, object) => {
    if (err || !object) {
      return res.send("couldnt find the object" + err);
    }
    console.log(object);
    res.locals.object = object;
    next();
  });
};

module.exports = ObtainObject;
