const mongoose = require('mongoose');

const Acc = mongoose.Schema({
    "Client_id": Number,
    "Acc_nub": Number,
    "Client_Name": String,
    "Amount_Acc" : Number
})

module.exports = mongoose.model("Clients",Acc,"Clients")