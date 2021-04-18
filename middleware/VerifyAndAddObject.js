// verify if the sender is the owner
// verify the details of the object that is submitted
// make a new Objs object into req
// even push the object into the database
const Bids = require("../models/bid");
const Objects = require("../models/object");
/* 
submission type:
{
  "description": "lol",
  "cost": 20
}
*/
const VerifyAndAddObject = async (req, res, next) => {
	try 
	{
		const bid = await Bids.create({
			bidder: res.locals.user._id,
			money: req.body.cost,
		});
		res.locals.object = await Objects.create({
			owner: res.locals.user._id,
			description: req.body.description,
		});
		res.locals.object.bids.push(bid);
		res.locals.object.save();
		next();
	}
	catch (error)
	{
		return res.status(500).send("invalid object data!\n" + error);
	}
};

module.exports = VerifyAndAddObject;
