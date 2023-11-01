const PaymentStatusCollection = require("../models/payment.model");
const stripe = require('stripe')(process.env.STRIPE_SECRET)

const paymentIntentController = async (req, res) => {
    const paymentinfo = req.body;
    const payment = parseInt(paymentinfo.alltotalamount) * 100;

    const paymentIntent = await stripe.paymentIntents.create({
        currency: 'usd',
        amount: payment,
        payment_method_types: ['card']
        });
    res.send({
    clientSecret: paymentIntent.client_secret
    }); 
};

const paymentStatusAddController = async (req, res) => {
    const data = req.body;

    const orderData = new PaymentStatusCollection({...data})
  
    await orderData.save()

    res.json({message: 'payment added successfully'})
}; 

module.exports = {
    paymentIntentController,
    paymentStatusAddController
  };