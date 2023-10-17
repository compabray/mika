const express = require('express');

const verifyToken = require('../utils/verifyToken');
const Fruit = require('../models/sFruit');

const router = express.Router();

router.post('/add', verifyToken, async (req, res) => {
    const { name, price, state, offer } = req.body;

    const fruit = new Fruit({
        name,
        price,
        state, 
        offer
    });

    await fruit.save();

    return res.json({message: 'Fruit added', fruit});
})

router.put('/update', verifyToken, async (req, res) => {

    const { name, price, state, offer, oldPrice } = req.body;

    const fruit = await Fruit.findOne({ name });

    if (!fruit) {
        return res.status(404).json({ message: 'Fruit not found' });
    }

    if (price) {
        fruit.price = price;
    }

    if (state) {
        fruit.state = state;
    }

    if (offer) {
        fruit.offer = offer;
    }

    if (oldPrice) {
        fruit.oldPrice = oldPrice;
    }

    await fruit.save();

    return res.json({ message: 'Fruit updated', fruit });
})


router.get('/all', async (req, res) => {
    const fruits = await Fruit.find({});

    return res.json(fruits);
})


module.exports = router;