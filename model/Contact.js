const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true
    },
    subject: {
        type: String,
        trim: true,
        required: true
    },
    message: {
        type: String,
        trim: true,
        maxLength: 2000,
        required: true
    }
});

const Contact = model('Contact', contactSchema);


module.exports = Contact;