const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sFruitSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type:Number,
        required:true
    },
    state: {
        type: Boolean,
        required: true
    },
    offer: {
        type: Boolean,
        required: true
    },
    oldPrice: {
        type: Number,
        
    },
});

const sFruit = mongoose.model('SFruit', sFruitSchema);

module.exports = sFruit;