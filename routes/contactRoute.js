const { contactPostController } = require('../controller/contactController');

const contactRouter = require('express').Router({ caseSensitive: true });


contactRouter.post('/', contactPostController);


module.exports = contactRouter;