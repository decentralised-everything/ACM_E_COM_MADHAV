const bid = require("../models/user");

//
const AuthenticateBid = async (req, res, next) => {
  if (
    req.body.bid.money >=
      res.locals.object.bids[res.locals.object.bids.length - 1].money &&
    req.body.bid.money <= res.locals.user.money
  ) {
    /* do further checks */
    // update the bid on the monogdb
    res.locals.object.bids.push(req.body.bid);
    res.locals.object.save();
    res.send(`yaay bid is added : ${req.body.bid.money}`);
    res.send(
      `remaining money if bid is accepted : ${user.money - req.body.bid.money}`
    );
    //
  } // keck
  else {
    res.send("not enough money or too spendthrifty");
    return res.end();
  }
  next();
};

module.exports = AuthenticateBid;
