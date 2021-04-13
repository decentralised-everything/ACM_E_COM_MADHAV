const router = require("express").Router();
const Login = require("../middleware/Login");
const Signup = require("../middleware/Signup");
// here, body must have name, password and type
// implement this as a promise
router.post(
  "/",
  (req, res, next) => {
    console.log("good!");
    next();
  },
  Login,
  Signup
);

module.exports = router;
