const router = require("express").Router();
const Login = require("../config/Login");
const Signup = require("../config/Signup");
// here, body must have name, password and type
// implement this as a promise
router.post(
  "/", 
  Login, 
  Signup
  );

module.exports = router;
