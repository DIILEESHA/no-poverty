const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema, model } = mongoose;


const productSchema = new Schema({

  productname : {
    type : String,
    required : true
  },

  unitprice : {
    type : String,
    required : true
  },

  sellername : {
    type : String,
    required : true
  },

  contactno : {
    type : String,
    required : true
  },

  description : {
    type : String,
    required : true
  },

  image : {
    type : String,
    required: true
  },


})

const Product = mongoose.model("Product",productSchema);

module.exports = Product;
