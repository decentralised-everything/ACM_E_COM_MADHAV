const router = require("express").Router();
const User = require("../models/user");
const AuthenticateToken = require("../config/authentication");
// to edit profile
router.post("/:name", AuthenticateToken, async (req, res) => {
  const { name } = req.params;
  const user = req.user;
  if (name === req.user.name) {
    /* edit shizz and save*/
  }
  res.json(user);
});

// to get profile
// remove AuthenticateToken if the accounts should be public
router.get("/:name", AuthenticateToken, async (req, res) => {
  const { name } = req.params;
  const user = users.find((user) => (user.name = name)); // local test
  // const user = await User.findOne({ name: name });
  res.json(user);
});

module.exports = router;
