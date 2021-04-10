const router = require("express").Router();
const Obj = require("../models/object");
const AuthenticateUser = require("../config/authentication");

// feed only for ppl who logged in
router.get("/", AuthenticateUser, async (req, res) => {
  // get all the objects in an Objects array
  res.json(Objects);
});
// missing a query, implement it ASAP

router.post("/", AuthenticateUser, ObtainObject, async (req, res) => {
  // const { name } = req.params;
  const object = req.object;
  const user = req.user;
  if (object.owner.name === req.user.name) {
    try {
      const obj = new Obj(object); // how do you copy an object's elements to another?
      obj.save();
    } catch (error) {
      return res.status(401).send("cheater dude is you");
    }
  } else {
    // go to the bidding page of the object
  }
  res.json(user);
  // res.redirect
});

module.exports = router;
