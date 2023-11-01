const { accessoriesCartAddController, getAccessoriesOrderController } = require("../controller/accessories.controller");

const router = require("express").Router();

router.post("/PostCart", accessoriesCartAddController);
router.get("/GetAccessoriesOrder", getAccessoriesOrderController);

module.exports = router;
