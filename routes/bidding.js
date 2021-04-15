const router = require("express").Router();
const { syncDevice } = require("../config");
const ObtainObject = require("../middleware/ObtainObject");
const AuthenticateBid = require("../middleware/AuthenticateBid");
const AuthenticateUser = require("../middleware/AuthenticateUser");

/* I wrote the helper functions
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
  try {
    if (res.locals.user._id !== res.locals.object.owner._id) {
      syncDevice.emit(`${res.locals.object._id}-sync`, req.body);
      res.locals.bidStatus = "sync";
    } else {
      syncDevice.emit(`${res.locals.object.id}-over`, req.body);
      res.locals.bidStatus = "over";
    }
  } catch (error) {
    res.send("syncing didnt work dudeee :(" + error);
  }
};
const ListenBid = async (req, res) => {
  try {
    const object = res.locals.object;
    object.populate('bids');
    res.send({ type: "object", object: object });
    syncDevice.on(`${object._id}-sync`, (bid) => {
      // new bids are updated to the users
      res.send({ type: "sync", bid: bid }); // send the recent bid..
      // push the bid to the array of bids
    });
    syncDevice.on(`${res.locals.object.id}-exit`, (bid) => {
      // the successful bid is chosen
      res.send({ type: "over", bid: bid });
      // continue
    });
  } catch (error) {
    res.send({ type: "error", error})
  }
};

// here there will be an issue of real time updates
// method selected: event listening and emitting using syncDevice
// getting object
router.get("/:id", ObtainObject, ListenBid);

// random person posts a bid or seller selects bid
router.post("/:id", AuthenticateUser, ObtainObject, AuthenticateBid, SpreadBid);

module.exports = router;
