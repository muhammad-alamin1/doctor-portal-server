const doctorRouter = require('express').Router({ caseSensitive: true });

const {
    doctorPostController,
    doctorGetController,
    doctorDeleteController,
    doctorUpdateController,
    doctorGetSingleController
} = require('../controller/doctorController');
const upload = require('../middleware/uploadMiddleware');


doctorRouter.post('/upload', upload.single('avatar'), doctorPostController);
doctorRouter.get('/all', doctorGetController);
doctorRouter.get('/single/:id', doctorGetSingleController);
doctorRouter.delete('/delete/:id', doctorDeleteController);
doctorRouter.post('/update/:id', doctorUpdateController);


module.exports = doctorRouter;