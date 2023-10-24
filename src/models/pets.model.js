const mongoose = require("mongoose");

const PetSchema = mongoose.Schema({
    petname: {
        type: String,
       },
    petprice: {
        type: Number,
       },
    category: {
        type: String,
       },
    type: {
        type: String,
       },
    gender: {
        type: String,
       },
    short: {
        type: String,
       },
    details: {
        type: String,
       },
    age: {
        type: String,
       },
    img: {
        type: mongoose.Mixed,
       },
    clan: {
        type: String,
       },
    color: {
        type: String,
       }
});

module.exports  = mongoose.model("Pet", PetSchema);
