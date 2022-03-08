const addAppointmentRouter = require('express').Router({ caseSensitive: true });

const { addAppointmentPostController, addAppointmentGetController } = require('../controller/addAppointmentController');


addAppointmentRouter.post('/', addAppointmentPostController);
addAppointmentRouter.get('/', addAppointmentGetController);


module.exports = addAppointmentRouter;