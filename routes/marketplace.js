const express = require("express");
const router = express.Router();
const Obj = require("../models/object");
const AuthenticateToken = require("../config/authentication");

// feed only for ppl who logged in
router.get("/", AuthenticateToken, async (req, res) => {
  // get all the objects in an Objects array
  res.json(Objects);
});

router.post("/", AuthenticateToken, async (req, res) => {
  const { name } = req.params;
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
    return res.status(401).send("cheater dude is you");
  }
  res.json(user);
});

module.exports = router;
