const dashboardRouter = require('express').Router({ caseSensitive: true });
const { bookingData } = require('../controller/dashboardController');


dashboardRouter.post('/booking-data', bookingData);


module.exports = dashboardRouter;