const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Admin = require('../models/admin');
const { verifyToken } = require('../utils/verifyToken');

require('dotenv').config();

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

    const token = jwt.sign({username}, process.env.SECRET);

    return res.json({ message: `${username} logged in`, token});
})


//Check token

router.post('/checktoken', (req, res) => {
    const token = req.body.token;
    if (!token) {
      return res.status(200).json({ message: 'No autorizado' });
    }
    try {
      jwt.verify(token, process.env.SECRET );
      res.status(200).json({ message: 'Token válido', state:true });
    } catch (err) {
      res.status(200).json({ message: 'Token inválido', state:false });
    }
  });





router.get('/users', async (req, res) => {
    const users = await Admin.find({});

    return res.json(users);
})

module.exports = router;