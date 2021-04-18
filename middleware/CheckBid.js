// every interval, we iterate through the bids and check if any bidder is a spendthrift
// or has been caught in cross transactions
// if so, every user is informed
// and then the imposter bids are kecked
const Users = require("../models/user");
const CheckBid = async (req, res, next) => {
  if (res.locals.chosen_bid_id) {
    next();
  } else {
    for (let i = 0; i < res.locals.object.bids.length; i++) {
      const bid = res.locals.object.bids[i];
      // finding out the user that cannot pay
      Users.findById(bid.bidder._id, (err, user) => {
        if (err) {
          /*brrrrrrr*/
        } else {
          if (bid.money > user.money) {
            // removing all the bids that he has made for a particular object
            for (let j = 0; j < res.locals.object.bids.length; j++) {
              if (res.locals.object.bids[j].bidder._id === user.id) {
                res.locals.object.bids.splice(j, 1);
                j--;
              }
            }
            i = 0;
            res.json({
              message: "The bids of the bidder was removed",
              user: user,
            });
          }
        }
      });
    }
    next();
  }
};

module.exports = CheckBid;
// 10k, 5k
// 8k
