const { postPetController, getPetController, getPetOrderController, acceptPetOrderController, getAccessoriesOrderController, makeAnAdminController } = require("../controller/admin.controller");

const router = require("express").Router();

router.post("/Petspost", postPetController);
router.get("/GetAllData", getPetController);
router.get("/GetAllPetOrder", getPetOrderController);
router.put("/AcceptPet/:id", acceptPetOrderController);
router.get("/GetAllAccessoriesOrder", getAccessoriesOrderController);
router.put("/MakeAnAdmin", makeAnAdminController);

module.exports = router;
