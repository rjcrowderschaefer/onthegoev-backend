const express = require('express');
const router = express.Router();

const TripInfo = require('../seed-data/TripPlanner-seed');
const Trips = require('../models/Trips')

router.get('/', async (req, res, next) => {
    try {
        // await Trips.deleteMany({});
        // const trips = await Trips.insertMany(TripInfo);
        const trips = await Trips.find({})
        res.json(trips);
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router