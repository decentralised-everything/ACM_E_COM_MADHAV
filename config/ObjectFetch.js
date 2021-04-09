const ObtainObject = async (req, res, next) => {
  const obj_id = req.body.id;
  // obtain the object
  next();
};

module.exports = ObtainObject;
