const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

// TODO: Add sighUp API route
app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Rohan",
    lastName: "Bari",
    emailId: "rohan.bari@gmail.com",
    password: "rohan@123",
    age: "28",
  });
  try {
    await user.save();
    res.status(200).send("User added successfully");
  } catch (err) {
    res.status(400).send("Failed to add a user !", { errMessage: err.message });
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established.");
    app.listen(3000, () => {
      console.log("Server sterted listening on PORT: 3000");
    });
  })
  .catch((err) => {
    console.error({ err });
  });
