const mongoose = require('../config/db.connection.js');

const contactFormSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true],
            unique: false
        },
        lastName: {
            type: String,
            required: [true],
            unique: false
        },
        email: {
            type: String,
            required: [true],
            unique: false
        },
        feedback: {
            type: String,
            required: [true],
            unique: false,
        }
    }
)

const ContactFeedback = mongoose.model('Feedback', contactFormSchema);

module.exports = ContactFeedback