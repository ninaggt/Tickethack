var express = require('express');
var router = express.Router();
const Trip = require("../models/trips")

router.post('/trips', (req, res) => {
    
    const newtrips = new Trip({
          departure: req.body.departure,
          arrival: req.body.arrival,
          price: req.body.price,
          date: req.body.date
    });
  console.log(req.body.departure,req.body.arrival);
    if (!req.body.departure && !req.body.arrival) {
      res.json({ result: false})
    } else {
      Trip.find().then(data => {
        let tab=[];
      for (let i=0; i<data.length; i++){
        if (data[i].departure === req.body.departure && data[i].arrival === req.body.arrival){
          tab.push(data[i]);
        }
      }
         res.json({ voyage: tab });
console.log(tab);
      })
    
      // newtrips.save().then()
      //   Trip.find().then (data => {
      //     res.json({ allTrips: data });
      //   })
      // });
    }

});

  router.get('/trips', (req, res) => {
    Trip.find().then(data => {
      res.json({ allTrips: data });
    })
  });


module.exports = router;
