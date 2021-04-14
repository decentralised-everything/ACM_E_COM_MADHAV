const Users = require("../models/user");
const ObtainUser = async (req, res, next) => {
  const { name } = req.params;
  Users.findOne({ name: name }, (err, user) => {
    if (err) return res.status(403).send("no such user signed up");
    else {
      delete user._id;
      delete user.password;
      console.log(user);
      res.json(user);
      next();
    }
  });
};

module.exports = ObtainUser;
