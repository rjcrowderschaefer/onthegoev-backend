const express = require('express');
const router = express.Router();

const CarInfo = require('../seed-data/Cars-seed')
const Cars = require('../models/Cars');
// const Cars = models.Cars;

// const CarInformation = require('../models/Cars');

router.get('/', async (req, res, next) => {
    try {
        console.log(req.params)
        // await Cars.deleteMany({});
        // const cars = await Cars.insertMany(CarInfo);
        const cars = await Cars.find({})
        // res.redirect('/cars');
        res.json(cars);
        // return(cars)
        // res.send(cars);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        console.log(req.params.id)
        const myCar = await Cars.findById(req.params.id);
        console.log(myCar)
        res.json(myCar)
    } catch(err) {
        console.log(err);
        next();
    }
});

module.exports = router 