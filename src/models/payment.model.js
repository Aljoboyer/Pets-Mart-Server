
const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
    username: {
        type: String,
       },
    paymentdate: {
        type: String,
       },
    amount: {
        type: Number,
        },
    floweramount: {
        type: Number,
        },
     phone:  {
            type: String,
           },
    email:  {
            type: String,
           },
    transaction: {
        type: String,
       },
});

module.exports  = mongoose.model("Payment", PaymentSchema);