const router = require("express").Router();
const Product = require("../models/product");
const multer = require("multer");
const path = require("path");

// Configure Multer for storing images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Media");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// localhost:5000/product/new - POST - Create a new product
router.post("/new", upload.single("image"), async (req, res) => {
  try {
    const { productname, unitprice, sellername, contactno, description } =
      req.body;
    const image = req.file ? req.file.path : "";

    const product = new Product({
      productname,
      unitprice,
      sellername,
      contactno,
      description,
      image,
    });
    await product.save();

    return res.status(201).json({
      status: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: " error",
      data: undefined,
    });
  }
});

router.route("/").get((req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.route("/update/:id").put(upload.single("image"), async (req, res) => {
  let userId = req.params.id;
  const {
    productname,
    unitprice,
    sellername,
    contactno,
    description,
    image,
  } = req.body;

  const updateProduct = {
    productname,
    unitprice,
    sellername,
    contactno,
    description,
    image: req.file ? req.file.path : image, // Use the updated image file if available, otherwise use the existing image path
  };

  const update = await Product.findByIdAndUpdate(userId, updateProduct)
    .then(() => {
      res.status(200).send({ status: "User updated" });
    })
    .catch((error) => {
      console.log(error);
      res
        .sendStatus(500)
        .send({ status: "Error with updating", error: error.message });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Product.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "Userdeleted" });
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .send({ status: "Error with delete", error: error.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await Product.findById(userId)
    .then((product) => {
      res.status(200).send({ status: "User fetched", product });
    })
    .catch(() => {
      console.log(error.message);
      res
        .status(500)
        .send({ status: "Error with get details", error: error.message });
    });
});

module.exports = router;
