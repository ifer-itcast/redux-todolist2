const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    id: String,
    title: String,
    completed: Boolean
});

const List = mongoose.model('list', listSchema);

module.exports = List;