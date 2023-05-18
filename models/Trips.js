const mongoose = require('../config/db.connection.js');

const tripPlannerInfoSchema = new mongoose.Schema(
    {
        tripName: {
            type: String,
            required: [true],
            unique: false,
        },
        tripOwner: {
            type: String,
            required: [true],
            unique: false,
        },
        numTravelers: {
            type: Number,
            required: [true],
            unique: false,
        },
        tripStart: {
            type: String,
            required: [true],
            unique: false
        },
        tripEnd: {
            type: String,
            required: [true],
            unique: false
        },
        carMake: {
            type: String,
            required: [true],
            unique: false,
        },
        carModel: {
            type: String,
            required: [true],
            unique: false
        },
        distanceHwy: {
            type: Number,
            required: [true],
            unique: false
        },
        startPoint: {
            type: String,
            required: [true],
            unique: false
        },
        endPoint: {
            type: String,
            required: [true],
            unique: false
        },
        totalDistance: {
            type: Number,
            required: [true],
            unique: false
        },
        numStops: {
            type: Number,
            required: [true],
            unique: false
        },
        notes: {
            type: String,
            required: [false],
            unique: false
        }
    }
)

const TripPlans = mongoose.model('TripPlan', tripPlannerInfoSchema);

module.exports = TripPlans