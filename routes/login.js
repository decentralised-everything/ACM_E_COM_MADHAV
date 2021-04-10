const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/user");
const { users } = require("../config");
// here, body must have name, password and type
// implement this as a promise
router.post("/", async (req, res) => {
  switch (req.body.type) {
    // unique name like in github
    case "sign_up":
      try {
        const hash = await bcrypt.hash(req.body.password, 10); //salts and hashes in 1 step
        const user = new Users({
          name: req.body.name,
          password: hash,
        });
        users.push(user); // local tests
        // await user.save();
        const accessToken = jwt.sign(
          req.body.name,
          process.env.ACCESS_SECRET_TOKEN
        );
        res.status(201).send({ accessToken: accessToken });
        console.log("\nY");
      } catch (error) {
        res.status(500).end();
        console.log("F");
      }
      break;

    case "log_in":
      try {
        const user = users.find((user) => (user.name = req.body.name)); // local tes
        // const user = await User.findOne({ name: req.body.name });
        if (!user) {
          return res.status(400).send("F...that user aint there");
        }
        try {
          if (await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = jwt.sign(
              req.body.name,
              process.env.ACCESS_SECRET_TOKEN
            );
            res.status(201).send({ accessToken: accessToken });

            console.log("\nY");
          } else {
            res.send("nahhh wrong password");
            res.end();
          }
        } catch (error) {
          res.end();
        }
      } catch (error) {
        res.status(500).send();
        res.end();
        console.log("F");
      }
      break;
  }
});

module.exports = router;
