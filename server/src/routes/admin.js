const express = require('express');
const mongoose = require('mongoose');

const Admin = require('../models/admin');

const router = express.Router();

router.post('/login', async (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.findOne({ username: username }); 

    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    if (password !== user.password) {
        return res.status(400).json({ message: 'Incorrect password' });
    }

    return res.json({ message: `${username} logged in`}, );
})

router.get('/users', async (req, res) => {
    const users = await Admin.find({});

    return res.json(users);
})

module.exports = router;