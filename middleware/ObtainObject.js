const Objects = require("../models/object");

const ObtainObject = async (req, res, next) => {
	const { id } = req.params;
	Objects.findOne({ _id: id }, (err, object) => {
 		if (err || !object)
			return res.send("couldnt find the object" + err);
		res.locals.object = object;
		next();
	});
};

module.exports = ObtainObject;
