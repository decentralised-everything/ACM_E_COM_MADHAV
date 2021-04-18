const Objs = require("../models/object");

const ReturnObjects = async (req, res) => {
  if (req.params) {
    try {
      res.locals.object.populate("bids");
      console.log(res.locals.object._id);
      res.send({ type: `${res.locals.object._id}`, object: res.locals.object });
    } catch (error) {
      res.send({ type: "error", error });
    }
  } else {
    Objs.find((err, objects) => {
      if (err) {
        res
          .status(500)
          .send("umm, there was an error with the database\n " + err);
      } else {
        res.status(200).send(objects);
      }
    });
  }
};
module.exports = ReturnObjects;
