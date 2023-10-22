const { userRegistrationController } = require("../controller/user.controller");

const router = require("express").Router();

router.post("/saveuser", userRegistrationController);

module.exports = router;
