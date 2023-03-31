const mongoose = require("mongoose");
var moment = require("moment");

const attributesSchema = new mongoose.Schema(
  {
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 10240,
      index: true,
    },
    ProductNumber: {
      type: String,
      unique: true,
      default: 100,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 10240,
      index: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 10240,
      index: true,
    },
    createdAt: {
      type: String,
      default: moment().format("MMM Do YYYY"),
    },
    mrp: {
      type: Number,
      required: true,
      minlength: 2,
      maxlength: 10240,
    },
    sp: {
      type: Number,
      required: true,
      minlength: 2,
      maxlength: 10240,
    },
    attributes: [attributesSchema],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

exports.Product = Product;
