const { Schema, model } = require('mongoose');

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
    },
    department: {
        type: String,
    },
    date: {
        type: String
    },
    images: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Doctor = model('Doctor', doctorSchema);


module.exports = Doctor;