const express = require('express');
const { MongoClient, ServerApiVersion  } = require('mongodb');
const cors = require('cors');
const app = express();
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET)
const fileUpload = require('express-fileupload');
const port = process.env.PORT || 5000;

//middleware 
app.use(cors()); 
app.use(express.json({limit: '50mb'}));
app.use(fileUpload());
app.use(express.urlencoded({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));  {limit: '50mb'}

// database connetion
// const connectDB = require("./src/connection/connectDB");
// connectDB()

//Route
const userRoutes = require("./src/routes/user.routes");

app.use("/user", userRoutes);


// async function run(){
//     try{
    
   
//             //checking the user role
//             app.get('/checkUser', async (req, res) => {
//                 const email = req.query.email
//                 const query = {email: email}
//                 const result = await UserCollection.findOne(query)
//                 res.send(result)
//             })

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
//         //user geting all pet data
//         app.get('/GetAllPets', async (req, res) => {
//             const query = {category: 'pets'}
//             const result = await PetsCollection.find(query).toArray()
//             res.send(result)
//         })  
//         //geting all pet accessories
//         app.get('/getAllAccessories', async (req, res) => {
//             const query = {category: 'accessories'}
//             const result = await PetsCollection.find(query).toArray();
//             const query2 = {category: 'food'}
//             const result2 = await PetsCollection.find(query2).toArray();
//             const newarr = [...result, ...result2]
//             res.send(newarr)
//         })
//         //order cart posting to database
//         app.post('/PostCart', async(req, res) => {
//             const data = req.body;
//             const result = await AccessoriesOrderCollection.insertMany(data)
//             res.json(result) 
//         })
//         //posting pet order
//         app.post('/PetOrderPost', async (req, res) => {
//             const pet = req.body;
//             const result = await PetOrderCollection.insertOne(pet);
//             res.json(result)
//         })
//         //geting accessories order 
//         app.get('/GetAccessoriesOrder', async (req, res) => {
//             const email = req.query.email
//             const query = {email: email}
//             const result = await AccessoriesOrderCollection.find(query).toArray()
//             res.send(result)
//         })
//         //geting pet order 
//         app.get('/GetPetOrder', async (req, res) => {
//             const email = req.query.email
//             const query = {email: email}
//             const result = await PetOrderCollection.find(query).toArray()
//             res.send(result)
//         })
//          //deleting pet order 
//          app.delete('/PetOrderDelete/:id', async (req, res) => {
//             const id = req.params.id

//             const query = {_id: id};
//             const result = await PetOrderCollection.deleteOne(query)
//             res.send(result)
//         }
//         )
//         //deleting accessories order 
//         app.delete('/accessoriesOrderDelete/:id', async (req, res) => {
//         const id = req.params.id
//         const query = {_id: id};
//         const result = await AccessoriesOrderCollection.deleteOne(query)
//         res.send(result)
//          }
//         )
//         //geting pet dog
//         app.get('/GetPetsType', async (req, res) => {
//         const data = req.query.filterdata
//         const newdata = JSON.parse(data)
//         const query = {category: newdata.category, type: newdata.type}
//         const result = await PetsCollection.find(query).toArray()
//         res.send(result)
//         })     
//         //---------stripe payment system---------//
//         //payment intent
//         app.post('/create-payment-intent', async (req, res) => {
//             const paymentinfo = req.body;
//             const payment = parseInt(paymentinfo.alltotalamount) * 100;

//             const paymentIntent = await stripe.paymentIntents.create({
//                 currency: 'usd',
//                 amount: payment,
//                 payment_method_types: ['card']
//                 });
//             res.send({
//             clientSecret: paymentIntent.client_secret
//             }); 
//         })
//         app.post('/paymentstatus', async (req, res) => {
//             const data = req.body;
//             const result = await PaymentStatusCollection.insertOne(data);
//             res.json(result)
//         })
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