const { userRegistrationController , userRoleCheckController} = require("../controller/user.controller");

const router = require("express").Router();

router.post("/saveuser", userRegistrationController);
router.get("/checkUser", userRoleCheckController);

module.exports = router;
