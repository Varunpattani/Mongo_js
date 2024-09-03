const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Customers = require("./Custom");
mongoose
  .connect(
    "mongodb+srv://23010101425:abcd@cluster0.yjl8g.mongodb.net/CoffeeShop"
  )
  .then(() => {
    const app = express();
    app.use;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get("/Coffee", async (req, res) => {
      try {
        const ans = await Customers.find();
        res.send(ans);
      } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data");
      }
    });

    app.get("/Coffee/:Customer_id", async (req, res) => {
      try {
        const ans = await Customers.findOne({
          Customer_id: req.params.Customer_id,
        });
        if (!ans) return res.status(404).send("data not found");
        res.send(ans);
      } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data");
      }
    });
    app.post("/Coffee", async (req, res) => {
      try {
        const temp = new Customers(req.body);
        const result = await temp.save();
        res.send(result);
      } catch (err) {
        console.error(err);
        res.status(400).send("Invalid data");
      }
    });
    app.patch("/Coffee/:Customer_id", async (req, res) => {
      const ans = await Customers.findOne({
        Customer_id: req.params.Customer_id,
      });
      if (!ans) return res.status(404).send("data not found");
      else {
        ans.Customer_id = req.body.Customer_id;
        ans.Customer_Name = req.body.Customer_Name;
        ans.Order_item = req.body.Order_item;
        ans.No_of_items = req.body.No_of_items;
        ans.Table_No = req.body.Table_No;
        ans.Category = req.body.Category;
        await ans.save();
        res.send(ans);
      }
    });
    app.delete("/Coffee/:Customer_id", async (req, res) => {
      const result = await Customers.deleteOne({
        Customer_id: req.params.Customer_id,
      });

      res.send(result);
    });
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  });
