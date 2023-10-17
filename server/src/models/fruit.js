const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fruitSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type:Number,
        required:true
    },
    offer: {
        type: Boolean,
        required: true
    },
    oldPrice: {
        type: Number,
    },
});

const fruit = mongoose.model('Fruit', fruitSchema);

module.exports = fruit;