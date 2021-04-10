const router = require("express").Router();
const { syncDevice, objects } = require("../config");
const ObtainObject = require("../config/ObtainObject");
// here there will be an issue of real time updates
// method selected: event listening and emitting using syncDevice
// getting object
router.get("/:id", ObtainObject, async (req, res) => {
  const object = req.object;
  res.json({ type: "object", object: object });

  await syncDevice.listen(`${req.object.id}-sync`, (bid) => {
    // new bids are updated to the users
    res.json({ type: "sync", bid: bid }); // send the recent bid
    // push the bid to the array of bids
  });
  await syncDevice.listen(`${req.object.id}-exit`, (bid) => {
    // the successful bid is chosen
    res.json({ type: "over", bid: bid });
    // continue
  });
});

// seller selects bid
router.post("/:id", AuthenticateUser, ObtainObject, AuthenticateBid, async (req, res) => {
  if (req.user.name !== req.object.owner.name) {
    await syncDevice.emit(`${req.object.id}-sync`, req.body.bid);
    res.send("suxxes");
  } else {
    await syncDevice.emit(`${req.object.id}-over`, req.body.bid);
    // delete the object
    // redirect to items sold
  }
});

// adds object
router.post('/', () => {
  // code
})
module.exports = router;
