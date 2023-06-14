const mongoose = require("mongoose");

const reserDoctorSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    start: {
      type: String,
    },
    end: {
      type: String,
    },
    time: {
      type: String,
    },

    phone: {
      type: String,
    },
    reservationPlace: {
      type: String,
    },
    reservationStatus: {
      type: Boolean,
      default: false,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    totalPaid: {
      type: Number,
    },
    paidAt: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("DoctorReservations", reserDoctorSchema);
