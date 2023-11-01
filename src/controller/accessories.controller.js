const AccessoriesOrderCollection = require("../models/accessoriesOrder.model");

const accessoriesCartAddController = async (req, res) => {
    const data = req.body;
    const result = await AccessoriesOrderCollection.insertMany(data)
    res.json(result) 
};

const getAccessoriesOrderController = async (req, res) => {
    const email = req.query.email
    const query = {email: email}
    const result = await AccessoriesOrderCollection.find(query)
    res.send(result)
}

const deketeAccessoriesOrderController = async (req, res) => {
    const id = req.params.id
    const query = {_id: id};
    const result = await AccessoriesOrderCollection.deleteOne(query)
    res.send(result)
}
module.exports = {
    accessoriesCartAddController,
    getAccessoriesOrderController,
    deketeAccessoriesOrderController
  };