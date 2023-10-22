const UserCollection = require("../models/user.model");

const userRegistrationController = async (req, res) => {
  console.log('route hitted >>>', req.body)
  const data = req.body;

  // const userData = new UserCollection({...data})
  
  // await userData.save()
    res.json({userDataSaved: true});
  };

  module.exports = {
    userRegistrationController
  };