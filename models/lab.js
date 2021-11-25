const mongoose = require("mongoose");

const labSchema = mongoose.Schema({
  labname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gstno: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  contactname: {
    type: String,
    required: true,
  },
  websiteurl: {
    type: String,
    required: true,
  },
  serviceathome: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  contactnopri: {
    type: String,
    required: true,
  },
  registerno: {
    type: String,
    required: true,
  },
  labservices: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  contactnosec: {
    type: String,
    required: true,
  },
  panno: {
    type: String,
    required: true,
  },
  packagecost: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Lab", labSchema);
