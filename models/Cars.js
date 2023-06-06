const mongoose = require('../config/db.connection.js');

const carInfoSchema = new mongoose.Schema(
    {
        model: {
            type: String,
            required: [true],
            unique: false,
        },

        make: {
            type: String,
            required: [true],
            unique: false,
        },

        rank: {
            type: Number,
            required: [true],
            unique: false,
        },

        year: {
            type: Number,
            required: [true],
            unique: false,
        },

        score: {
            type: Number,
            required: [true],
            unique: false,
        },

        msrpStart: {
            type: String,
            required: [true],
            unique: false,
        },

        msrpEnd: {
            type: String,
            required: [true],
            unique: false,
        },

        mpgCity: {
            type: Number,
            required: [false],
            unique: false,
        },

        mpgHwy: {
            type: Number,
            required: [false],
            unique: false,
        },

        review: {
            type: String,
            required: [true],
            unique: false,
        },

        img1: {
            type: String,
            required: [true],
            unique: false,
        },

        img2: {
            type: String,
            required: [true],
            unique: false,
        },

        img3: {
            type: String,
            required: [true],
            unique: false,
        },

        pros: {
            pro1: String,
            pro2: String,
            pro3: String,
            pro4: String,
        },

        cons: {
            con1: String,
            con2: String,
            con3: String,
            con4: String,
        },

        featuresAndSpecs: {
            spec1: String,
            spec2: String,
            spec3: String,
            spec4: String,
        }
    }
)

const Cars = mongoose.model('Car', carInfoSchema);

module.exports = Cars