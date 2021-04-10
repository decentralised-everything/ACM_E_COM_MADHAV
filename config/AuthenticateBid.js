const bid = require("../models/user");

const AuthenticateBid = async (req, res, next) => {
  if (req.body.bid.money >= req.object.bid[0].money) {
    /* yaay bid verified*/
    // update the bid on the monogdb
    res.send(`yaay bid is added : ${req.body.bid.money}`);
    res.send(`remaining money if bid is accepted : ${user.money - req.body.bid.money}`);
    // 
  } // keck
  else next();
};

module.exports = AuthenticateBid;
