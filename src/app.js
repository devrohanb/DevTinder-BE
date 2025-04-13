const express = require("express");

const app = express();

// TODO: Make use of get()
app.get("/user/:userId/:empId", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.send({ firstName: "Rohan", lastName: "Bari" }); // Update later
});

app.listen(3000, () => {
  console.log("Server started on PORT: 3000");
});
