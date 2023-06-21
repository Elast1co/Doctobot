const express = require("express");

const {
  getReserDoctorSchemaValidator,
  createReserDoctorSchemaValidator,
  updateReserDoctorSchemaValidator,
  deleteReserDoctorSchemaValidator,
} = require("../utils/validators/reserDoctorValidator");

const authService = require("../services/Authentication");

const {
  getReserDoctors,
  getReserDoctor,
  createReserDoctor,
  updateReserDoctor,
  deleteReserDoctor,
} = require("../services/DoctorReservation");

const router = express.Router();

router
  .route("/")
  .get(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    getReserDoctors
  )
  .post(createReserDoctorSchemaValidator, createReserDoctor); // Added callback function for post method

router
  .route("/:id")
  .get(
    authService.protect,
    authService.allowedTo("admin", "manager", "doctor"),
    getReserDoctorSchemaValidator,
    getReserDoctor
  )
  .put(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    updateReserDoctorSchemaValidator,
    updateReserDoctor
  )
  .delete(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    deleteReserDoctorSchemaValidator,
    deleteReserDoctor
  );

module.exports = router;
