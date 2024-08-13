const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://23010101425:abcd@cluster0.yjl8g.mongodb.net/students")
  .then(() => {
    const express = require("express");
    const bodyParser = require("body-parser");

    const records = require("./schema");

    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get("/students", async (req, res) => {
      const ans = await records.find();
      res.send(ans);
    });

    app.get("/students/:id", (req, res) => {
      const ans = schema.findOnce(...req.body).toArray();
      res.send(ans);
    });

    app.listen(3000, () => {
      console.log("server started");
    });
  });
