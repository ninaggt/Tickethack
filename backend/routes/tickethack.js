require('../models/connection')
const express = require('express');
const router = express.Router();
const Trip = require('../models/trips');


    router.post('/trips',(req,res) => {
        const newTrips = {
            departure: req.body.departure, 
            arrival: req.body.arrival,
            date : req.body.date,
            price : req.body.price
        }
        Trip.push(newTrips),
        res.json({allTrips : Trip})
    })

module.exports = router;