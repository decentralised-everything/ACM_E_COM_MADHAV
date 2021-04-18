const router = require("express").Router();
const AuthenticateUser = require("../middleware/AuthenticateUser");
const VerifyAndAddObject = require("../middleware/VerifyAndAddObject");
const ReturnObjects = require("../middleware/ReturnObjects");

// feed only for ppl who logged in
router.get(
	"/", 
	AuthenticateUser, 
	ReturnObjects
);
// missing queries, implement it ASAP

// only for adding an object
router.post(
	"/add",
	AuthenticateUser,
	VerifyAndAddObject,
	ReturnObjects
);

module.exports = router;
