const jwt = require('jsonwebtoken');
require('dotenv').config();



function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No autorizado' });
    }

    const decoded = jwt.verify(token, process.env.SECRET);

    req.username = decoded.username;

    next();
}

module.exports = verifyToken ;