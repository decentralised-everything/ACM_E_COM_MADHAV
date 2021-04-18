const UpdateObject = async (req, res, next) => {
	if (res.locals.chosen_bid_id)
	{
		res.locals.object.remove();
		return res.send("the auction has been confirmed");
	}
	else
    		next();
};

module.exports = UpdateObject;
