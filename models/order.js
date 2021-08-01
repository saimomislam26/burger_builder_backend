const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    userID: Schema.Types.ObjectId, //to keep track which user id ordered the item
    ingredients: [{
        type: { type: String },
        amount: Number
    }],
    customer: {
        deliveryAddress: String,
        phone: String,
        paymentType: String
    },
    price: Number,
    orderTime: {
        type: Date,
        default: Date.now()
    }
})

const Order = model('order', orderSchema)
module.exports.Order = Order;