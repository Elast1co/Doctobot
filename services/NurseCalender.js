// const asyncHandler = require("express-async-handler");

const factory = require("./HandlersFactory");
const NurseCalender = require("../models/NurseCalender");

// Get list of nurses
exports.getNurseCalenders = factory.getAll();

// Get specific Reservation by id
exports.getNurseCalender = factory.getOne(NurseCalender);

// Create Reservation
exports.createNurseCalender = factory.createOne(NurseCalender);

// Update specific Reservation
exports.updateNurseCalender = factory.updateOne(NurseCalender);

// Delete specific Reservation
exports.deleteNurseCalender = factory.deleteOne(NurseCalender);
