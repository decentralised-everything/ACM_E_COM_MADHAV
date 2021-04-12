const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users } = require(".");
const Login = async (req, res, next) => {
    if (req.body.type === "log_in") {

          try {
            const user = users.find((user) => (user.name = req.body.name)); // local tes
            // const user = await User.findOne({ name: req.body.name });
            if (!user) {
              return res.status(400).send("F...that user aint there");
            }
            try {
              if (await bcrypt.compare(req.body.password, user.password)) {
                const accessToken = jwt.sign(
                  req.body.name,
                  process.env.ACCESS_SECRET_TOKEN
                );
                res.status(201).send({ accessToken: accessToken });
    
                console.log("\nY");
              } else {
                res.send("nahhh wrong password");
                res.end();
              }
            } catch (error) {
              res.end();
            }
          } catch (error) {
            res.status(500).send();
            res.end();
            console.log("F");
          }
      }
}

module.exports = Login;