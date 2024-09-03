const mongoose = require("mongoose");

const custom = mongoose.Schema({
  Customer_id: Number,
  Customer_Name: String,
  Order_item: Number,
  No_of_items: Number,
  Table_No: Number,
  Category: String,
});
module.exports = mongoose.model("Customers", custom, "Customers");
