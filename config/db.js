// config/db.js
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // Make sure you have the URI in a default.json file or replace it with the URI string

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
