const uuidv4 = require('uuid/v4');
const List = require('../model/list');

module.exports = async (req, res) => {
    const obj = {...req.body, id: uuidv4()};
    const result = await List.create(obj);
    res.send(result);
};