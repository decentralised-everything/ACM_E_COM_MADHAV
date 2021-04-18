const Bids = require("../models/bid");

/*
structure: {
  money: 30
} 
*/
const AuthenticateBid = async (req, res, next) => {
  /*
   * 
   *
   * 
   * i wanted to implement nepotism 
   * 
   * 
   * */
  const temp1 = res.locals.user._id.toString();
  const temp2 = res.locals.object.owner._id.toString();
  if (temp1 === temp2) {
    res.locals.chosen_bid_id = req.body.id;
    console.log("chosen_bid_id = " + res.locals.chosen_bid_id);
    next();
  } else {
    res.locals.bid = await Bids.findById(
      res.locals.object.bids[res.locals.object.bids.length - 1]._id
    );
    console.log("bid\n" + res.locals.bid + "\n");
    if (
      res.locals.bid &&
      res.locals.user &&
      req.body.money >= res.locals.bid.money &&
      req.body.money <= res.locals.user.money
    ) {
      /* do further checks */
      // update the bid on the monogdb
      Bids.create(
        { bidder: res.locals.user._id, money: req.body.money },
        (err, bid) => {
          if (err) return res.send("error " + err);
          res.locals.object.bids.push(bid);
          res.locals.object.save();
          res.send(
            `yaay bid is added : ${
              req.body.money
            }\nremaining money if bid is accepted : ${
              res.locals.user.money - req.body.money
            }`
          );
          next();
        }
      );
    } else {
      return res.send("spendthrift!");
    }
  }
};

module.exports = AuthenticateBid;
