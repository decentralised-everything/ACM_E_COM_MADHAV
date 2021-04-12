require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/user");
const Signup = async (req, res) => {
  if (req.body.type == "sign_up") {
    // unique names only
    try {
      const hash = await bcrypt.hash(req.body.password, 10); //salts and hashes in 1 step
      Users.create(
        {
          name: req.body.name,
          password: hash,
        },
        (err, user) => {
          if (err) {
          } else {
            const accessToken = jwt.sign(
              user.name,
              process.env.ACCESS_SECRET_TOKEN
            );
            res.status(201).send({ accessToken: accessToken });
          }
        }
      );
    } catch (error) {
      res.status(500).send();
    }
  }
};

module.exports = Signup;
