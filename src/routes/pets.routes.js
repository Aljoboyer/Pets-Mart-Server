const { getAllPetsController, getPetAccessoriesController, getPetsByType, orderingPetsController, getPetOrderController } = require("../controller/pets.controller");

const router = require("express").Router();

router.get("/GetAllPets", getAllPetsController);
router.get("/getAllAccessories", getPetAccessoriesController);
router.get("/GetPetsType", getPetsByType);
router.post("/PetOrderPost", orderingPetsController);
router.get("/GetPetOrder", getPetOrderController);

module.exports = router;
