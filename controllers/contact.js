const express = require('express');
const router = express.Router();

const ContactFeedback = require('../seed-data/Contact-seed');
const Feedback = require('../models/Contact');

router.get('/', async (req, res, next) => {
    try {
        // await Feedback.deleteMany({});
        // const feedbackInfo = await Feedback.insertMany(ContactFeedback);
        const feedback = await Feedback.find({});
        res.json(feedback);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.post('', async (req, res, next) => {
    try {
        const newFeedback = req.body;
        await Feedback.create(req.body);
        console.log(newFeedback);
        res.json(await Feedback.find({}));
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;