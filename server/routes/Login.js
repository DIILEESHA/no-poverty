const router = require("express").Router();
const User = require("../models/User");

const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");

//token given key
const sec = "kjktjtjtjt";

router.use(cookieparser());


router.post("/signup", async (req, res) => {
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

router.post("/login", async (req, res) => {
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
router.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, sec, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

router.post("/logout", (req, res) => {
  res.cookie("token", " ").json("ok");
});

module.exports = router;
