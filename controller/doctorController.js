const Doctor = require("../model/Doctor")

// doctor post controller 
const doctorPostController = async(req, res, next) => {
    const { name, email, phone } = req.body;

    try {
        const doctor = new Doctor({
            name,
            email,
            phone,
            images: req.file.filename || '',
        });

        await doctor.save();
        res.status(200).json({
            message: "Doctor added successfully!",
        });
        next();
    } catch (error) {
        res.status(500).json({
            msg: `There was an server side error.!`
        })
    }
}

// doctor get controller
const doctorGetController = async(req, res, next) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json({
            success: true,
            allDoctors: doctors
        });
        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    doctorPostController,
    doctorGetController
}