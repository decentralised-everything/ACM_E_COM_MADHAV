const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

const users = [];
// here, body must have name, password and type
router.post("/", async (req, res) => {
  switch (req.body.type) {
    case "sign_up":
      try {
        const hash = await bcrypt.hash(req.body.password, 10); //salts and hashes in 1 step
        const user = new User({
          name: req.body.name,
          password: hash,
        });
        users.push(user);
        res.status(201).send();
        console.log("\nY");
      } catch (error) {
        res.status(500).send();
        console.log("F");
      }
      break;

    case "log_in":
      try {
        const user = users.find((user) => (user.name = req.body.name));
        if (!user) {
          return res.status(400).send("F...that user aint there");
        }
        try {
          if (await bcrypt.compare(req.body.password, user.password)) {
            res.send("yaayyy");
            console.log("\nY");
          } else {
            res.send("nahhh");
          }
        } catch (error) {}
      } catch (error) {
        res.status(500).send();
        console.log("F");
      }
      break;
  }
});

module.exports = router;
