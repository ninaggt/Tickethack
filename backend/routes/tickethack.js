require('../models/connection')
const express = require('express');
const router = express.Router();
const Trip = require('../models/trips');
const Cart = require('../models/cart');


router.post('/cart',(req,res) => {
   if (req.body.id) {
        Trip.findOne({_id:req.body.id}).then(item =>{
            const newCart = new Cart({
                departure: item.departure, 
                arrival: item.arrival,
                date : item.date,
                price : item.price
            })
            newCart.save().then( ( )=>
            res.json({result : true}))    
        })
    } else {
        res.json({result : false})
    }    
})

module.exports = router;