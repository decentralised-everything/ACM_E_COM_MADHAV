require("dotenv").config();

const jwt = require("jsonwebtoken");
const Users = require("../models/user");

const AuthenticateUser = async (req, res, next) => {
  const Header_auth = req.headers["authorization"];
  const token = Header_auth && Header_auth.split(" ")[1];
  if (!token) return res.status(401).end();
  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, name) => {
    if (err) return res.status(403).end(); // if 403 then the token is not found
    Users.findOne({ name: name }, (err, user) => {
      if (err) return res.send("no such user signed up").end();
      else res.locals.user = user;
    });
  });
  console.log(res.locals.user);
  next();
};

module.exports = AuthenticateUser;
