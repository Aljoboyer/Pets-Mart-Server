const PetsCollection = require("../models/pets.model");
const PetOrderCollection = require("../models/petsOrder.model");
const AccessoriesOrderCollection = require("../models/accessoriesOrder.model");
const UserCollection = require("../models/user.model");

const postPetController = async (req, res) => {
    const data  = req.body;
    const imgdata = req.files.img.data;

    const encodedpic = imgdata.toString('base64');
    const img = Buffer.from(encodedpic, 'base64');

    const petdata = {...data, img};

    const postData = new PetsCollection({...petdata})
  
    await postData.save()

    res.json({msg: 'saved success'})
};

const getPetController = async (req, res) => {
    const allData = PetsCollection.find({});
    res.send(allData)
};

const getPetOrderController = async (req, res) => {
    const allData = PetOrderCollection.find({})
    res.send(allData)
};

const acceptPetOrderController = async (req, res) => {
    const id = req.params.id
    const query = {_id: id}
    const option = {upsert: true}
    const updatedoc = {
        $set: {
            status: 'Approved'
        }
    }
    const result = await PetOrderCollection.updateOne(query,updatedoc, option)
    res.json(result)
};

const getAccessoriesOrderController = async (req, res) => {
    const allData = AccessoriesOrderCollection.find({});
    res.send(allData)
};

const makeAnAdminController = async (req, res) => {
    const email = req.query.email
    const query = {email: email}
    const option = {upsert: true}
    const updatedoc = {
        $set : {
            role: 'admin'
        }
    }
    const result = await UserCollection.updateOne(query, updatedoc, option);
    res.json(result)
};

module.exports = {
    postPetController,
    getPetController,
    getPetOrderController,
    acceptPetOrderController,
    getAccessoriesOrderController,
    makeAnAdminController
}