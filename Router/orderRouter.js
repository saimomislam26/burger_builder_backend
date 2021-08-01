const express = require('express');
const { Order } = require('../models/order')
const authorize = require('../middleware/authorize');

const router = express.Router();

const newOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        return res.status(201).send(order);
    } catch (err) {
        return res.send("Something is wrong!!Try Again..");
    }
}
const orderList = async (req, res) => {
    const order = await Order.find({ userID: req.user._id })
        .sort({ orderTime: -1 })
    res.send(order);
}

router.route('/')
    .get(authorize, orderList)
    .post(authorize, newOrder)

module.exports = router;


// "ingredients":[{"type":"salad","amount":1},{"type":"meat","amount":2}],
// "customer":{"deliveryAddres":"abcd",
// "phone":"0125855",
// "paymentType":"Cash"
// },
// "price":230


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTA1NmVhYWZmOTIyMDE0NzQyM2FjMzMiLCJlbWFpbCI6IlNhaW1vbUBnbWFpbC5jb20iLCJpYXQiOjE2Mjc3NDU5ODAsImV4cCI6MTYyNzc1Njc4MH0.wFDF57kIvJxaJArwBOUZ-mgmdXavlo_5wuUfWcM-lgE