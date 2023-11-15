


const mongoose = require("mongoose");

const addToCartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserData", // Reference to the UserData model
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AllData", // Reference to the AllData model
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AddToCart = mongoose.model("AddToCart", addToCartSchema);

module.exports = AddToCart;
