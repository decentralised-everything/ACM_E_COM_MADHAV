const router = require("express").Router();
const AuthenticateUser = require("../config/AuthenticateUser");
const VerifyAndAddObject = require("../config/VerifyAndAddObject");
const ReturnObjects = require("../config/ReturnObjects")

// feed only for ppl who logged in
router.get("/", AuthenticateUser, ReturnObjects);
// missing queries, implement it ASAP

// only for adding an object
router.post("/add", AuthenticateUser, VerifyAndAddObject, ReturnObjects);

module.exports = router;
