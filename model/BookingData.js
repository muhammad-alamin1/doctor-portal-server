const { Schema, model } = require('mongoose');

const bookingDataSchema = new Schema({
    id: Number,
    subject: String,
    visitingHour: String,
    totalSpace: Number
});

const BookingData = model('BookingData', bookingDataSchema);


module.exports = BookingData;