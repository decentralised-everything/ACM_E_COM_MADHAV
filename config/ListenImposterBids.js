// every interval, we iterate through the bids and check if any bidder is a spendthrift
// or has been caught in cross transactions
// if so, every user is informed
// and then the imposter bids are kecked
const Users = require("../models/user");
const ListenImposterBids = async (req, res, next) => {
  setInterval(() => {
    for (let i = 0; i < res.local.object.bids.length; i++) {
      const bid = res.local.object.bids[i];
      Users.findById(bid.bidder._id, (err, user) => {
        if (err) {
          /*brrrrrrr*/
        } else {
          if (bid.money > user.money) {
            for (let j = 0; j < res.local.object.bids.length; j++) {
                if(res.local.object.bids[j].bidder._id === user.id){
                    res.locals.object.bids.splice(j, 1);
                    j--;
                }
            }
            i=0;
            res.json({message:"The bids of the bidder was removed", user:user});
          }
        }
      });
    }

  }, 300000);
};

module.exports = ListenImposterBids;
// 10k, 5k
// 8k
