const Objs = require("../models/object");

const ReturnObjects = async (req, res) => {
  // returns the list of all objects
  Objs.find({}).exec((err, objects) => {
    if (err) {
      res.send("umm, there was an error with the database");
      res.end();
    } else {
      res.json(objects);
    }
  });
};
module.exports = ReturnObjects;
