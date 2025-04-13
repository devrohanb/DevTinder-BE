const express = require("express");

const app = express();

// app.use(
//   "/users",
//   (req, res, next) => {
//     console.log("1st response log!");
//     next();
//   },
//   (req, res, next) => {
//     console.log("2nds response log !");
//     res.send("send 2");
//     next();
//   },
//   (req, res, next) => {
//     console.log("3rd response log !");
//     next();
//     res.send("send 3");
//   }
// );

// app.get("/user/:userId/:empId", (req, res) => {
//   console.log(req.query);
//   console.log(req.params);
//   res.send({ firstName: "Rohan", lastName: "Bari" }); // Update later
// });

app.listen(3000, () => {
  console.log("Server started on PORT: 3000");
});
