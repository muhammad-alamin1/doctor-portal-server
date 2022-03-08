const bcrypt = require('bcrypt');
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

module.exports = {
    userSignupPostController,
    userInfo
}