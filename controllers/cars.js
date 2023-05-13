const express = require('express');
const router = express.Router();

const CarInfo = require('../seed-data/Cars-seed')
const Cars = require('../models/Cars');
// const Cars = models.Cars;

// const CarInformation = require('../models/Cars');

router.get('/', async (req, res, next) => {
    try {
        await Cars.deleteMany({});
        const cars = await Cars.insertMany(CarInfo);
        // res.redirect('/cars');
        res.json(cars);
        // return(cars)
        // res.send(cars);
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router 