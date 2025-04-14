const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://devrohanb:root9694@fullstacktest01.muuwwib.mongodb.net/DevTinder_01"
  );
};

module.exports = connectDB;
