const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Clients = require("./Acc");

mongoose
  .connect(
    "mongodb+srv://23010101425:abcd@cluster0.yjl8g.mongodb.net/Bank_Management"
  )
  .then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get("/Bank", async (req, res) => {
      try {
        const ans = await Clients.find();
        res.send(ans);
      } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data");
      }
    });
    app.get("/Bank/:Client_id", async (req, res) => {
      try {
        const ans = await Clients.findOne({
          Client_id: req.params.Client_id,
        });
        res.send(ans);
      } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data");
      }
    });
    app.post("/Bank", async (req, res) => {
      try {
        const temp = new Clients(req.body);
        const result = await temp.save();
        res.send(result);
      } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data");
      }
    });
    app.delete("/Bank/:Client_id", async (req, res) => {
      try {
        const ans = await Clients.deleteOne({
          Client_id: req.params.Client_id,
        });
        res.send(ans);
      } catch (err) {
        console.error(err);
        res.status(400).send("Invalid data");
      }
    });
    app.patch("/Bank/:Client_id", async (req, res) => {
      const ans = await Clients.findOne({
        Client_id: req.params.Client_id,
      });

      if (!ans) return res.status(404).send("data not found");
      else {
        ans.Client_id = req.body.Client_id;
        ans.Acc_nub = req.body.Acc_nub;
        ans.Client_Name = req.body.Client_Name;
        ans.Amount_Acc = req.body.Amount_Acc;
        await ans.save();
        res.send(ans);
      }
    });

    app.listen(3000, () => {
      console.log("Server started at 3000");
    });
  });
