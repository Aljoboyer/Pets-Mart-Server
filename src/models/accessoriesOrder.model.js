const mongoose = require("mongoose");

const AccessoriesorderSchema = mongoose.Schema({
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
       },
    username: {
        type: String,
       },
    location: {
        type: String,
       },
    phone:  {
        type: String,
       },
    email:  {
        type: String,
       },
    orderDate: {
        type: String,
       },
    status:  {
        type: String,
       },
    accessoriesAmount:{
    type: Number,
    },
    totalamount: {
        type: Number,
        },
});

module.exports  = mongoose.model("Accessoriesorder", AccessoriesorderSchema);
