const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log('mongodb is connected');
  } catch (error) {
    console.error('DataBase connection failed');
  }
};

module.exports = connectDb;
