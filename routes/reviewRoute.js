const reviewRouter = require('express').Router({ caseSensitive: true });

const { reviewPostController, reviewGetController } = require('../controller/reviewController');
const upload = require('../middleware/uploadMiddleware');


reviewRouter.post('/review', upload.single('avatar'), reviewPostController);
reviewRouter.get('/review', reviewGetController);


module.exports = reviewRouter;