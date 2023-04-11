const express = require("express");

const app = express();

//middleware
// app.use(express.json());

//listen port

app.get("/test", (req, res) => {
  res.json("test works!");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
