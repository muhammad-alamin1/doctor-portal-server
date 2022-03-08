const userRouter = require('express').Router({ caseSensitive: true });

const { userSignupPostController, userInfo } = require('../controller/userController');


userRouter.post('/', userSignupPostController);
userRouter.get('/', userInfo);


module.exports = userRouter;