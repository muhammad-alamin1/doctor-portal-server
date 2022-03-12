const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    stars: {
        type: Number,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Review = model('Review', reviewSchema);


module.exports = Review;