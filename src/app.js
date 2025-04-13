const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello fron the server");
});

app.use("/test", (req, res) => {
  res.send("This is a test API endpoint");
});

app.use("/users", (req, res) => {
  res.send("This is users page !");
});

app.listen(3000, () => {
  console.log("Server started on PORT: 3000");
});
