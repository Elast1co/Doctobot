const express = require("express");

const {
  getDoctorCalenderSchemaValidator,
  createDoctorCalenderSchemaValidator,
  updateDoctorCalenderSchemaValidator,
  deleteDoctorCalenderSchemaValidator,
} = require("../utils/validators/DoctorCalenderValidator");

const {
  getDoctorCalenders,
  getDoctorCalender,
  createDoctorCalender,
  updateDoctorCalender,
  deleteDoctorCalender,
} = require("../services/DoctorCalender");

const authService = require("../services/Authentication");

const router = express.Router();

router
  .route("/")
  .get(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    getDoctorCalenders
  )
  .post(createDoctorCalenderSchemaValidator, createDoctorCalender); // Added callback function for post method

router
  .route("/:id")
  .get(
    authService.protect,
    authService.allowedTo("admin", "manager", "doctor"),
    getDoctorCalenderSchemaValidator,
    getDoctorCalender
  )
  .put(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    updateDoctorCalenderSchemaValidator,
    updateDoctorCalender
  )
  .delete(
    authService.protect,
    authService.allowedTo("admin"),
    deleteDoctorCalenderSchemaValidator,
    deleteDoctorCalender
  );

module.exports = router;
