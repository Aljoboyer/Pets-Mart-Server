const { accessoriesCartAddController, getAccessoriesOrderController, deketeAccessoriesOrderController } = require("../controller/accessories.controller");

const router = require("express").Router();

router.post("/PostCart", accessoriesCartAddController);
router.get("/GetAccessoriesOrder", getAccessoriesOrderController);
router.delete("/accessoriesOrderDelete/:id", deketeAccessoriesOrderController);

module.exports = router;
