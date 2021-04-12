const Objects = require("../models/object");

const ObtainObject = async (req, res, next) => {
  const { obj_id } = req.params;
  try {
    res.locals.object = await Objects.findById(obj_id);
  } catch (error) {
    res.send("couldnt find the object");
    return res.end();
  }
  
  next();
};

module.exports = ObtainObject;
