const express = require('express');
const Razorpay = require("razorpay")
const router = express.Router();
const userController = require('../controller/userlog'); // Adjust path if needed

router.get('/get', userController.getData);
router.post('/send', userController.sendData);
router.put('/put', userController.putData);
router.put('/update/:_id', userController.updateData)
router.delete('/delete/:_id', userController.deleteData )
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID ,
  key_secret:process.env.RAZORPAY_SECRET
});

router.post("/order", async (req, res) => {
  const amount = req.body.amount * 100; // convert ₹ to paise

  const options = {
    amount: amount,
    currency: "INR",
    receipt: "receipt_order_" + Math.floor(Math.random() * 10000),
    payment_capture: 1,
  };

  try {
    const order = await instance.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;