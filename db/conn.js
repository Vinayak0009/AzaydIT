
const mongoose = require('mongoose');

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log('Failed to connect to MongoDB', error);
    throw error;
  }
};

module.exports = connectDB;

