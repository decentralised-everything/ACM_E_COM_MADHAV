const Users = require("../models/user");
const ObtainUser = async (req, res) => {
  const user = await Users.findOne({ name: res.locals.user.name });
  res.json(user);
};

module.exports = ObtainUser;
