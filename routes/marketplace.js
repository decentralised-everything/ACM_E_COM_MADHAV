const express = require("express");
const router = express.Router();
const Obj = require("../models/object");
const AuthenticateToken = require("../config/authentication");

// feed only for ppl who logged in
router.get("/", AuthenticateToken, async (req, res) => {
  // get all the objects in an Objects array
  res.json(Objects);
});

module.exports = router;
