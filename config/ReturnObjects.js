const Objs = require("../models/object");

const ReturnObjects = async (req, res) => {
  Objs.find({}).exec((err, objects) => {
    if (err) {
    } else {
      res.json(objects);
    }
  });
};
module.exports = ReturnObjects;
