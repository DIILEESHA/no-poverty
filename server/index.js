const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
const User = require("./models/User");
const app = express();
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");

const sec = "kjktjtjtjt";
//middleware
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieparser());

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

//login

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userImp = await User.findOne({ username });

  const passwordOk = bcrypt.compareSync(password, userImp.password);

  if (passwordOk) {
    //logged
    jwt.sign({ username, id: userImp._id }, sec, {}, (err, token) => {
      if (err) throw err;

      res.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

//get profile with checked logged
app.get("/profile", (req, res) => {
  res.json(req.cookies);
});

//app listen port
app.listen(5000, () => {
  console.log("server running on port 5000");
});
