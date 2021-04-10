const ObtainObject = async (req, res, next) => {
  const obj_id = req.body.id;
  // sort the bids and then obtain the object
  req.object = object
  next();
};

module.exports = ObtainObject;
