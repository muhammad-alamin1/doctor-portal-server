const {Schema, model} = require('mongoose');

const addAppointmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
    },
    weight: {
        type: Number,
    }
}, {timestamps: true});

const AddAppointment = model('AddAppointment', addAppointmentSchema);

module.exports = AddAppointment;