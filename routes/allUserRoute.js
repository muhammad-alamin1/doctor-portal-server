const userRouter = require('express').Router({ caseSensitive: true });

const { userSignupPostController, userInfo, userLoginPostController } = require('../controller/userController');


userRouter.post('/signup', userSignupPostController);
userRouter.post('/login', userLoginPostController);
userRouter.get('/', userInfo);


module.exports = userRouter;