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

app.use("/user", userRoutes);
app.use("/pets", petsRoutes);
app.use("/payment", paymentRoutes);
app.use("/accessories", accessoriesRoutes);


// async function run(){
//     try{
    

//         //----------OTHER END--------//
//     //---------------Admin---------------//
//         //admin posting pet data to database
//         app.post('/Petspost', async(req, res) => {
//             const data  = req.body;
//             const imgdata = req.files.img.data;

//             const encodedpic = imgdata.toString('base64');
//             const img = Buffer.from(encodedpic, 'base64');

//             const petdata = {...data, img};
//             const result = await PetsCollection.insertOne(petdata);
//             res.json(result)
//         })
//         //admin getting all data for manage 
//         app.get('/GetAllData', async (req, res) => {
//             const cursor = PetsCollection.find({});
//             const pets = await cursor.toArray()
//             res.send(pets)
//         })
//         //admin geting all pet order 
//         app.get('/GetAllPetOrder', async(req, res) => {
//             const cursor = PetOrderCollection.find({})
//             const result = await cursor.toArray()
//             res.send(result)
//         })
//         //admin accepting pet order 
//         app.put('/AcceptPet/:id', async (req, res) => {
//             const id = req.params.id
//             const query = {_id: id}
//             const option = {upsert: true}
//             const updatedoc = {
//                 $set: {
//                     status: 'Approved'
//                 }
//             }
//             const result = await PetOrderCollection.updateOne(query,updatedoc, option)
//             res.json(result)
//         })
//         //admin geting all accessories
//         app.get('/GetAllAccessoriesOrder', async (req, res) => {

//             const cursor = AccessoriesOrderCollection.find({})
//             const result = await cursor.toArray()
//             res.send(result)
//         })
//         //admin making another admin
//         app.put('/MakeAnAdmin', async (req, res) => {
//             const email = req.query.email
//             const query = {email: email}
//             const option = {upsert: true}
//             const updatedoc = {
//                 $set : {
//                     role: 'admin'
//                 }
//             }
//             const result = await UserCollection.updateOne(query, updatedoc, option);
//             res.json(result)
//         })
//     //---------------Admin END---------------//
 
//     //-------------USER---------------------//

//         //geting accessories order 
//         app.get('/', async (req, res) => {
//            
//         })

//
//         //deleting accessories order 
//         app.delete('/accessoriesOrderDelete/:id', async (req, res) => {
//         const id = req.params.id
//         const query = {_id: id};
//         const result = await AccessoriesOrderCollection.deleteOne(query)
//         res.send(result)
//          }
//         )


//     //------------USER END-----------------//
//     } 
//     finally{ 
        
//     }
// }

// run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Hello ..! Pet-Shop Server is connected');
})

app.listen(port, (req, res) => {
    console.log('Pet Shop Port is', port)
})