require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const AuthenticateUser = async (req, res, next) => {
  const Header_auth = req.headers["authorization"];
  const token = Header_auth && Header_auth.split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, name) => {
    if (err) return res.sendStatus(403); // if 403 then the token is not found
    req.user = users.find((user) => (user.name = name)); // local test
    // const user = await User.findOne({ name: name });

    next();
  });
};

module.exports = AuthenticateUser;
