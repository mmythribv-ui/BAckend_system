const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URL;

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

module.exports = connectToMongo;
