const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

//JE VEUX RECUPERER MES DONNEE ENREGISTRE DANS MA BASE DE DONNEE

router.get('/cartSave', (req,res) =>{
Cart.find().then(data =>{
    if(data.length>0){
        res.json({allCart : data})
}    else {
    res.json({default : false})
}
} )

}
)

router.delete('/cartDelete/:id',(req,res) =>{
    Cart.deleteOne({_id : req.params.id}).then(() => {
        res.json({delete : 'deleted'})
    })
    
})
module.exports = router;