// const asyncHandler = require("express-async-handler");

const factory = require("./HandlersFactory");
const DoctorCalender = require("../models/DoctorCalender");

// Get list of nurses
exports.getDoctorCalenders = factory.getAll(DoctorCalender);

// Get specific Reservation by id
exports.getDoctorCalender = factory.getOne(DoctorCalender);

// Create Reservation
exports.createDoctorCalender = factory.createOne(DoctorCalender);

// Update specific Reservation
exports.updateDoctorCalender = factory.updateOne(DoctorCalender);

// Delete specific Reservation
exports.deleteDoctorCalender = factory.deleteOne(DoctorCalender);
