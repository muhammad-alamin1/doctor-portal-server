const Prescription = require("../model/Prescription");

const prescriptionPostController = async (req, res, next) => {
  const { name, email, doctor } = req.body;
  const file = req.file.filename || "";

  try {
    if (req.file) {
      const prescription = new Prescription({
        name,
        email,
        doctor,
        file,
      });

      await prescription.save();
      res.status(200).json({
        success: true,
        message: "Prescription saved successfully.!",
      });
    } else {
      res.status(500).json({
        message: "There was an server side error.!",
      });
    }
  } catch (error) {
    console.log(error);
  }
  next();
};

// all prescription
const prescriptionGetController = async (req, res, next) => {
  try {
    const prescriptions = await Prescription.find();
    res.status(200).json({
      success: true,
      prescriptions,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  prescriptionPostController,
  prescriptionGetController
};
