const Review = require("../model/Review");

const reviewPostController = async (req, res) => {
    const { name, message, stars } = req.body;

    try {
        let newReview = new Review({
            name,
            message,
            stars,
            avatar: req.file.filename,
        });

        await newReview.save();
        res.status(200).json({
            success: true,
            message: `Review created successfully.!`
        });
    } catch (error) {
        console.log(error);
    }
}

const reviewGetController = async (req, res, next) => {
    try {
        const reviews = await Review.find();
        res.status(200).json({
            success: true,
            reviews
        });
    } catch (error) {   
        console.log(error);
    }
}

module.exports = {
    reviewPostController,
    reviewGetController
}