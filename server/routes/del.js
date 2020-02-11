const List = require('../model/list');

module.exports = async (req, res) => {
    const {id} = req.query;
    const result = await List.findOneAndDelete({id});
    res.send(result);
};