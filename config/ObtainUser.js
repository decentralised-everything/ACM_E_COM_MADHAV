const Users = require("../models/user");
const ObtainUser = async (req, res) => {
  user = await Users.findOne({ name: res.locals.user.name });
  res.json(user);
};

module.exports = ObtainUser;
