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

router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const myTrip = await Trips.findById(req.params.id);
        console.log(myTrip)
        res.json(myTrip)
    } catch(err) {
        console.log(err);
        next();
    }
});

router.post('', async (req, res, next) => {
    try {
        const newTrip = req.body
        await Trips.create(req.body);
        console.log(newTrip);
        res.json(await Trips.find({}));
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedTrip = await Trips.findByIdAndUpdate(req.params.id, req.body);
        res.json(updatedTrip);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedTrip = await Trips.findByIdAndDelete(req.params.id);
        res.redirect('/trip-planner');
    } catch(err) {
        console.log(err);
    }
})

module.exports = router