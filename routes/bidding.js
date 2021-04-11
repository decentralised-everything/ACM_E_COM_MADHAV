const router = require("express").Router();
const { syncDevice } = require("../config");
const ObtainObject = require("../config/ObtainObject");
const AuthenticateBid = require("../config/AuthenticateBid");
const AuthenticateUser = require("../config/AuthenticateUser");
const ListenImposterBids = require("../config/ListenImposterBids");
// here there will be an issue of real time updates
// method selected: event listening and emitting using syncDevice
// getting object
router.get("/:id", ObtainObject, ListenBid, ListenImposterBids);

// random person posts a bid or seller selects bid
router.post("/:id", AuthenticateUser, ObtainObject, AuthenticateBid, SpreadBid);

module.exports = router;

/* I originally wrote the helper functions
 * here itself because i was afraid of the 
 * event object syncDevice messing up, had 
 * i defined it in another file
 *
 *
 *
 *
 *
 *  The helper functions */
const SpreadBid = async (req, res) => {
  if (res.locals.user.name !== res.locals.object.owner.name) {
    await syncDevice.emit(`${res.locals.object.id}-sync`, req.body.bid);
    res.locals.bidStatus = "sync";
  } else {
    await syncDevice.emit(`${res.locals.object.id}-over`, req.body.bid);
    res.locals.bidStatus = "over";
  }
};
const ListenBid = async (req, res) => {
  const object = res.locals.object;
  res.json({ type: "object", object: object });
  await syncDevice.listen(`${res.locals.object.id}-sync`, (bid) => {
    // new bids are updated to the users
    res.json({ type: "sync", bid: bid }); // send the recent bid.. 
    // push the bid to the array of bids
  });
  await syncDevice.listen(`${res.locals.object.id}-exit`, (bid) => {
    // the successful bid is chosen
    res.json({ type: "over", bid: bid });
    // continue
  });
};
