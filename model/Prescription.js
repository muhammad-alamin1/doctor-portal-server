const { Schema, model } = require("mongoose");

const prescriptionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    doctor: {
      type: String,
      required: true,
      trim: true,
    },
    file: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Prescription = model("Prescription", prescriptionSchema);

module.exports = Prescription;
