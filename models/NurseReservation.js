const mongoose = require("mongoose");

const reserNurseSchema = new mongoose.Schema(
  {
    Nurse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nurse",
    },
    start: {
      type: String,
    },
    end: {
      type: String,
    },

    job: {
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

module.exports = mongoose.model("NurseReservations", reserNurseSchema);
