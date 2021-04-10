const bid = require("../models/user");

const AuthenticateBid = async (req, res, next) => {
  if (req.body.bid.money >= res.locals.object.bid[0].money) {
    /* yaay bid verified*/
    // update the bid on the monogdb
    res.send(`yaay bid is added : ${req.body.bid.money}`);
    res.send(
      `remaining money if bid is accepted : ${user.money - req.body.bid.money}`
    );
    //
  } // keck
  else {
    res.send("not enough money");
    return res.end();
  }
  next();
};

module.exports = AuthenticateBid;
