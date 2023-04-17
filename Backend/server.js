const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

//mongoose connection
mongoose
  .connect(process.env.mongoDBURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoDB Successfully Connected"))
  .catch((error) => console.log(error));

app.listen(8070, () => {
  console.log("server running on PORT 8070");
});
