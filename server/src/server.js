const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const adminRoutes = require('./routes/admin');

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

// Connect to MongoDB
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
).then(() => {
    console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/admin', adminRoutes);


app.listen(port, () => {
    console.log('Example app listening on port 5000!');
    }
);

