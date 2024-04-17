require('../models/connection')
const express = require('express');
const router = express.Router();
//const Trip = require('../models/trips');
const Cart = require('../models/cart');


    router.post('/cart',(req,res) => {
        console.log('coucou')
        const newCart = new Cart({
            departure: req.body.departure, 
            arrival: req.body.arrival,
            date : req.body.date,
            price : req.body.price
        })
        newCart.save().then( ( )=>
        res.json({allCart : newCart}))
        })

module.exports = router;