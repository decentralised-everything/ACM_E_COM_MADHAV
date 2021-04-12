const Users = require("../models/user");
const UpdateUser = async (req, res) => {
  const { name } = req.params;
  if (name === res.locals.user.name) {
    await Users.findOneAndUpdate({ name: name }, {}); // how do you add the updated info?
  } else {
    res.send(`dont change ${name}'s details, genius!`);
    res.end();
  }
};

module.exports = UpdateUser;
