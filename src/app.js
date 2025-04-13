const express = require("express");

const app = express();

// TODO: Make use of get()
app.get("/users", (req, res) => {
  res.send({ firstName: "Rohan", lastName: "Bari" }); // Update later
});

app.post("/users", (req, res) => {
  // Add DB logic here
  res.send("Users data saved to DB successfully !");
});

app.delete("/users", (req, res) => {
  res.send("User deleted successfully ");
});

app.put("/users", (req, res) => {
  res.send("User updated successfully");
});

app.use("/test", (req, res) => {
  res.send("This is a test API endpoint");
});

app.listen(3000, () => {
  console.log("Server started on PORT: 3000");
});
