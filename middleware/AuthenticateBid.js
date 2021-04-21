const Bids = require("../models/bid");
const Users = require("../models/user");
/*
structure: {
  money: 30
} 
*/
  /*
   * 
   *
   * 
   * i wanted to implement nepotism 
   * 
   * 
   * */
const AuthenticateBid = async (req, res, next) => {
	const temp1 = res.locals.user._id.toString(); //the guy who posted
	const temp2 = res.locals.object.owner._id.toString(); // the owner
	if (temp1 === temp2) 
	{
		try 
		{
			// add condition where bidder cannot post bids
			// if he has a bid more than account balance
			res.locals.chosen_bid_id = req.body.id;
			const bid = await Bids.findById(res.locals.chosen_bid_id);
			const user = await Users.findById(bid.bidder);
			user.money -= bid.money;
			user.save();
			next();
		} 
		catch (error) 
		{
			res.status(500).send(error);
		}
	}
	else 
	{
		res.locals.bid = await Bids.findById(
		res.locals.object.bids[res.locals.object.bids.length - 1]._id
		);
		console.log("bid\n" + res.locals.bid + "\n");
		if (
			res.locals.bid &&
			res.locals.user &&
			res.locals.user.activity < 9 &&
			req.body.money >= res.locals.bid.money &&
			req.body.money <= res.locals.user.money
		) 
		{
		        /* do further checks */
		        // update the bid on the monogdb
				try 
				{
					const bid = await Bids.create({
						 bidder: res.locals.user._id, 
						 money: req.body.money 
					});
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
				catch (err) 
				{
					return res.send(err);
				}
    		} 
		else
      		return res.status(418).send("not possible to bid");
	}
};

module.exports = AuthenticateBid;
