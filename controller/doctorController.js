const Doctor = require("../model/Doctor")

// doctor post controller 
const doctorPostController = async (req, res, next) => {
    const { name, email, phone, department, date } = req.body;

    try {
        const doctor = new Doctor({
            name,
            email,
            phone,
            department,
            date,
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
const doctorGetController = async (req, res, next) => {
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

//  get single doctor
const doctorGetSingleController = async (req, res, next) => {
    try {
        const doctor = await Doctor.findOne({ _id: req.params.id });

        res.status(200).json({
            doctor
        })
    } catch (error) {
        console.log(error);
    }
}

// delete doctor from database
const doctorDeleteController = async (req, res, next) => {
    const { id } = req.params;

    try {
        await Doctor.findOneAndDelete({ _id: id });
        res.status(200).json({
            success: true,
            message: 'Doctor deleted successfully.!'
        })

    } catch (error) {
        res.status(500).json({
            message: 'There was an server error.!'
        })
    }
}

// update controller
const doctorUpdateController = async (req, res, next) => {
    const { id } = req.params;
    const { name, email, phone, department } = req.body;
    console.log(req.body)
    // const file = req.file.filename || '';

    try {
        await Doctor.findOneAndUpdate({ _id: id }, { $set: { name, email, phone, department } }, { new: true });
        res.status(200).json({
            success: true,
            message: 'Updated successfully'
        })
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    doctorPostController,
    doctorGetController,
    doctorDeleteController,
    doctorUpdateController,
    doctorGetSingleController
}