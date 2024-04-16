const mongoose = require('mongoose');

const cartsSchema = mongoose.Schema({
    departure : String,
    arrival : String,
    date : Date,
    price : Number,
});

const Cart = mongoose.model('trips',tripsSchema);
module.exports = Cart;