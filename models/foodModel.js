const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number
});

module.exports = mongoose.model('Food', foodSchema);
