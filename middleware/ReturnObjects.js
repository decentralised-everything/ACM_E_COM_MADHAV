const Objs = require("../models/object");

const ReturnObjects = async (req, res) => {
  // returns the list of all objects
  Objs.find((err, objects) => {
    if (err) {
      res
        .status(500)
        .send("umm, there was an error with the database\n " + err);
    } else {
      res.status(200).send(objects);
    }
  });
};
module.exports = ReturnObjects;
