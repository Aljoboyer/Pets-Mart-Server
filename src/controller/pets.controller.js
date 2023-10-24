const PetsCollection = require("../models/pets.model");
const PetOrderCollection = require("../models/petsOrder.model");

const getAllPetsController = async (req, res) => {
    const query = {category: 'pets'}
    const result = await PetsCollection.find(query)
    res.send(result)
};

const getPetAccessoriesController = async (req, res) => {
    const query = {category: 'accessories'}
    const result = await PetsCollection.find(query);
    const query2 = {category: 'food'}
    const result2 = await PetsCollection.find(query2);
    const newarr = [...result, ...result2]
    res.send(newarr)
};

const getPetsByType = async (req, res) => {
    const data = req.query.filterdata
    const newdata = JSON.parse(data)

    const query = {category: newdata.category, type: newdata.type}
    const result = await PetsCollection.find(query)
    res.send(result)
};

//---------------Ordering Pets---------------//
const orderingPetsController = async (req, res) => {
    const order = req.body;

    const orderData = new PetOrderCollection({...order})
  
    await orderData.save()

    res.json({ordered: true})
};

const getPetOrderController = async (req, res) => {
    const email = req.query.email
    const query = {email: email}
    const result = await PetOrderCollection.find(query)
    res.send(result)
};

  module.exports = {
    getAllPetsController,
    getPetAccessoriesController,
    getPetsByType,
    orderingPetsController,
    getPetOrderController
  };