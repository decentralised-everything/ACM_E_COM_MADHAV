const Users = require("../models/user");
const UpdateUser = async (req, res) => {
  const { name } = req.params;
  if (name === res.locals.user.name) {
    try {
      delete req.body.password;
      delete req.body.name;
      delete req.body._id;
      await Users.findOneAndUpdate({ name: res.locals.user.name }, req.body);
      console.log("done");
    } catch (error) {
      res.send("couldnt update!");
    }
  } else {
    res.status(418).send(`dont change ${name}'s details, genius!`);
  }
};

module.exports = UpdateUser;
