const doctorRouter = require('express').Router({ caseSensitive: true });

const { doctorPostController, doctorGetController } = require('../controller/doctorController');
const upload = require('../middleware/uploadMiddleware');


doctorRouter.post('/upload', upload.single('avatar'), doctorPostController);
doctorRouter.get('/all', doctorGetController);


module.exports = doctorRouter;