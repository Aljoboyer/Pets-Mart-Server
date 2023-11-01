const express = require('express');
const { MongoClient, ServerApiVersion  } = require('mongodb');
const cors = require('cors');
const app = express();
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const fileUpload = require('express-fileupload');
const port = process.env.PORT || 5000;

//middleware 
app.use(cors()); 
app.use(express.json({limit: '50mb'}));
app.use(fileUpload());
app.use(express.urlencoded({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));  {limit: '50mb'}

// database connetion
const connectDB = require("./src/connection/connectDB");
connectDB()

//Route
const userRoutes = require("./src/routes/user.routes");
const petsRoutes = require("./src/routes/pets.routes");
const paymentRoutes = require("./src/routes/payments.routes");
const accessoriesRoutes = require("./src/routes/accessories.routes");
const adminRoutes = require("./src/routes/admin.routes");

app.use("/user", userRoutes);
app.use("/pets", petsRoutes);
app.use("/payment", paymentRoutes);
app.use("/accessories", accessoriesRoutes);
app.use("/admin", adminRoutes);

app.get('/', (req, res) => {
    res.send('Hello ..! Pet-Shop Server is connected');
})

app.listen(port, (req, res) => {
    console.log('Pet Shop Port is', port)
})