const reviewRouter = require('express').Router({ caseSensitive: true });

const { reviewPostController, reviewGetController } = require('../controller/reviewController');
const upload = require('../middleware/uploadMiddleware');


reviewRouter.post('/', upload.single('avatar'), reviewPostController);
reviewRouter.get('/', reviewGetController);


module.exports = reviewRouter;