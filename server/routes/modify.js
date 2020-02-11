const List = require('../model/list');

module.exports = async (req, res) => {
    const { id, completed } = req.body;
    const result = await List.updateOne({id}, {completed});
    res.send(result);
};
