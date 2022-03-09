const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../model/User");

// sign up
const userSignupPostController = async(req, res) => {
    const { userName, email, password } = req.body;
    // console.log(req.body);

    try {
        // hashed password 
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            userName,
            email,
            password: hashedPassword
        });

        await user.save();
    } catch (error) {
        console.log(error);
    }
}

// get user information
const userInfo = async(req, res) => {
    try {
        const user = await User.find();
        res.status(200).json({
            success: true,
            users: user
        });
    } catch (error) {
        console.log(error);
    }
}

// user login 
const userLoginPostController = async(req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        
        if(user && user._id){
            // check valid pass
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);

            if(isValidPassword) {
                // generate user object
                const userObject = {
                    userId: user._id,
                    username: user.userName,
                    email: user.email
                }
                
                // generate token
                const token = jwt.sign(userObject, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES
                });
                
                // set cookie
                res.cookie(process.env.COOKIE_NAME, token, {
                    maxAge: process.env.JWT_EXPIRES
                });
                console.log(user)
                next();
            } else {
                res.status(401).json({
                    message: `Authentication failed.!`
                })
            }
        } else {
            res.status(401).json({
                message: `Authentication failed.!`
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    userSignupPostController,
    userInfo,
    userLoginPostController
}