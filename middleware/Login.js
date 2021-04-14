const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/user");
const Login = async (req, res, next) => {
  const user = await Users.findOne({ name: req.body.name });
  if (!user) {
    next();
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        req.body.name,
        process.env.ACCESS_SECRET_TOKEN
      );
      res.status(201).send({ accessToken: accessToken });
    } else {
      res.send("nahhh wrong password");
    }
  } catch (error) {
    res.send("nahhh something wrong");
  }
};

module.exports = Login;

/*
const Login = async (req, res, next) => {
  if (req.body.type === "log_in") {
    try {
      const user = await Users.findOne({ name: req.body.name });
      if (!user) {
        return res.status(500).send("F...that user aint there");
      }
      try {
        if (await bcrypt.compare(req.body.password, user.password)) {
          const accessToken = jwt.sign(
            req.body.name,
            process.env.ACCESS_SECRET_TOKEN
          );
          res.status(201).send({ accessToken: accessToken });
        } else {
          res.send("nahhh wrong password");
        }
      } catch (error) {}
    } catch (error) {
      res.status(500).send("bad!");
    }
  } else {
    next();
  }
};

module.exports = Login;
*/
