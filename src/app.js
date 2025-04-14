const express = require("express");
const { authMiddleware } = require("./middlewares/authMiddleware");

const app = express();

app.get("/users", authMiddleware, (req, res) => {
  try {
    console.log("Running try block ");
    throw new Error("asdasdasd");
  } catch (err) {
    console.error({ err });
    res.status(500).send("Something went wrong !!");
  }
});

// NOTE: Generic error
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong !");
  }
});

// app.get("/user/:userId/:empId", (req, res) => {
//   console.log(req.query);
//   console.log(req.params);
//   res.send({ firstName: "Rohan", lastName: "Bari" }); // Update later
// });

app.listen(3000, () => {
  console.log("Server started on PORT: 3000");
});
