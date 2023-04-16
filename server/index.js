const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
const User = require("./models/User");
const app = express();

var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
//middleware
app.use(cors());
app.use(express.json());

//mongoose connection
mongoose.connect(
  "mongodb+srv://itpmwork:T7YMOWG7sR1rwBZu@cluster0.e1zcjo5.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: "true",
  }
);
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoDB is connected");
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userImp = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userImp);
  } catch (err) {
    res.status(400).json(err);
  }
});

//app listen port
app.listen(5000, () => {
  console.log("server running on port 5000");
});
