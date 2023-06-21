// const asyncHandler = require("express-async-handler");

const factory = require("./HandlersFactory");
const Reservation = require("../models/NurseReservation");

// Get list of nurses
exports.getReserNurses = factory.getAll(Reservation);

// Get specific Reservation by id
exports.getReserNurse = factory.getOne(Reservation);

// Create Reservation
exports.createReserNurse = factory.createOne(Reservation);

// Update specific Reservation
exports.updateReserNurse = factory.updateOne(Reservation);

// Delete specific Reservation
exports.deleteReserNurse = factory.deleteOne(Reservation);
