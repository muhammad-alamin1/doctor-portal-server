const AddAppointment = require("../model/AddAppointment");

// AddAppointment post
const addAppointmentPostController = async(req, res) => {
    try {
        const { name, phone, email, gender, age, weight, } = req.body;
        const addAppointmentObj = new AddAppointment({
            name,
            phone,
            email,
            gender,
            age,
            weight
        });

        await addAppointmentObj.save();
    } catch (error) {
        console.log(error);
    }
}

// addAppointment get
const addAppointmentGetController = async(req, res) => {
    const patient = await AddAppointment.find();
    res.status(200).json({
        success: true,
        allAppointments: patient
    });
}

module.exports = {
    addAppointmentPostController,
    addAppointmentGetController
};