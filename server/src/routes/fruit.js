const express = require('express');

const verifyToken = require('../utils/verifyToken');
const Fruit = require('../models/fruit');

const router = express.Router();

router.post('/add', verifyToken, async (req, res) => {
    const { name, price, offer } = req.body;

    const fruit = new Fruit({
        name,
        price,
        offer
    });

    await fruit.save();

    return res.json({message: 'Fruit added', fruit});
})

router.put('/update', verifyToken, async (req, res) => {

    const { name, price, offer, oldPrice } = req.body;

    const fruit = await Fruit.findOne({ name });

    if (!fruit) {
        return res.status(404).json({ message: 'Fruit not found' });
    }

    fruit.name = name;
    fruit.price = price;
    fruit.offer = offer;
    fruit.oldPrice = oldPrice;
    

    await fruit.save();

    return res.json({ message: 'Fruit updated', fruit });
})


router.get('/all', async (req, res) => {
    const fruits = await Fruit.find({});

    return res.json(fruits);
})

module.exports = router;