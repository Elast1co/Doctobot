// const asyncHandler = require("express-async-handler");

const factory = require("./HandlersFactory");
const Reservation = require("../models/DoctorReservation");

// Get list of nurses
exports.getReserDoctors = factory.getAll(Reservation);

// Get specific Reservation by id
exports.getReserDoctor = factory.getOne(Reservation);

// Create Reservation
exports.createReserDoctor = factory.createOne(Reservation);

// Update specific Reservation
exports.updateReserDoctor = factory.updateOne(Reservation);

// Delete specific Reservation
exports.deleteReserDoctor = factory.deleteOne(Reservation);
