const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postJobSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  requirement: {
    type: String,
    required: true,
  },
  noOfEmp: {
    type: Number,
    required: true,
  },

});

module.exports = mongoose.model("jobs", postJobSchema);