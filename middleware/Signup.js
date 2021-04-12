const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/user");
const { users } = require(".");
const Signup = async (req, res) => {
    if (req.body.type == "sign_up") {
        // unique names only
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
      }
}

module.exports = Signup;