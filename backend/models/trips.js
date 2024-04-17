const mongoose = require('mongoose');

const tripsSchema = mongoose.Schema({
    departure : String,
    arrival : String,
    price: Number,
    date :Date
});

const Trip = mongoose.model('trips',tripsSchema);
module.exports = Trip;
