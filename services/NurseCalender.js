// const asyncHandler = require("express-async-handler");

const factory = require("./HandlersFactory");
const Reservation = require("../models/NurseCalender");

// Get list of nurses
exports.getNurseCalenders = factory.getAll(Reservation);

// Get specific Reservation by id
exports.getNurseCalender = factory.getOne(Reservation);

// Create Reservation
exports.createNurseCalender = factory.createOne(Reservation);

// Update specific Reservation
exports.updateNurseCalender = factory.updateOne(Reservation);

// Delete specific Reservation
exports.deleteNurseCalender = factory.deleteOne(Reservation);
