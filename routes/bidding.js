const router = require("express").Router();
const ObtainObject = require("../middleware/ObtainObject");
const AuthenticateBid = require("../middleware/AuthenticateBid");
const AuthenticateUser = require("../middleware/AuthenticateUser");
const ReturnObjects = require("../middleware/ReturnObjects");
const CheckBid = require("../middleware/CheckBid");
const UpdateObject = require("../middleware/UpdateObject");

router.get("/:id", ObtainObject, ReturnObjects);

// random person posts a bid or seller selects bid
router.post("/:id", AuthenticateUser, ObtainObject, AuthenticateBid, CheckBid, UpdateObject, ReturnObjects);

module.exports = router;
