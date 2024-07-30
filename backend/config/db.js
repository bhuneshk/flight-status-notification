const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
    const dbURI = process.env.NODE_ENV === 'production' ? process.env.PROD_MONGO_URI : process.env.DEV_MONGO_URI;
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
};

module.exports = connectDB;
