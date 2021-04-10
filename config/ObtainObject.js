const Objects = require("../models/object");

const ObtainObject = async (req, res, next) => {
  const { obj_id } = req.params;
  await Objects.findById(obj_id, (err, object) => {
    if (err) {
      res.send("couldnt find the object");
      return res.end();
    } else {
      object.bids.sort((bid) => -1 * bid.money); // -1 coz you want a descending order
      res.locals.object = object;
    }
  });

  next();
};

module.exports = ObtainObject;
