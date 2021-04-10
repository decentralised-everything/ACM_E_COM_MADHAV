const Users = require("../models/user");
const UpdateUser = async (req, res) => {
  const { name } = req.params;
  if (name === req.user.name) {
    await Users.findOneAndUpdate({ name: name }, {}); // how do you add the updated info?
  }
};

module.exports = UpdateUser;
