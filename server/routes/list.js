const uuidv4 = require('uuid/v4');
const List = require('../model/list');

module.exports = async (req, res) => {
	const result = await List.find();
	res.send(result);
};
