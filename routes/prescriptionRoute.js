const prescriptionRoute = require('express').Router({ caseSensitive: true });
const { prescriptionPostController, prescriptionGetController } = require('../controller/prescriptionPostController');
const upload = require('../middleware/uploadMiddleware');


prescriptionRoute.post('/', upload.single('file'), prescriptionPostController);
prescriptionRoute.get('/',  prescriptionGetController);

module.exports = prescriptionRoute;