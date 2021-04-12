const router = require("express").Router();
const AuthenticateUser = require("../config/AuthenticateUser");
const UpdateUser = require("../config/UpdateUser");
const ObtainUser = require("../config/ObtainUser");
// to edit profile
router.post(
    "/:name", 
    AuthenticateUser, 
    UpdateUser, 
    ObtainUser
    );

// to get profile
// remove AuthenticateUser if the accounts should be public on the internet
router.get(
    "/:name", 
    AuthenticateUser, 
    ObtainUser
    );

module.exports = router;
