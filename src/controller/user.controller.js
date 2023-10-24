const UserCollection = require("../models/user.model");

const userRegistrationController = async (req, res) => {

  const data = req.body;

  const userData = new UserCollection({...data})
  
  await userData.save()
    res.json({userDataSaved: true});
  };

  const userRoleCheckController = async (req, res) => {
    const email = req.query.email
    const query = {email: email}
    const result = await UserCollection.findOne(query)
    res.send(result)
};

  module.exports = {
    userRegistrationController,
    userRoleCheckController
  };