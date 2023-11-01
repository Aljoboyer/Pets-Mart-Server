const { paymentIntentController, paymentStatusAddController } = require("../controller/payment.controller");
const {  } = require("../controller/pets.controller");

const router = require("express").Router();

router.post("/create-payment-intent", paymentIntentController);
router.post("/paymentstatus", paymentStatusAddController);

module.exports = router;
