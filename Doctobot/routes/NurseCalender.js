const express = require("express");

const {
  getNurseCalenderSchemaValidator,
  createNurseCalenderSchemaValidator,
  updateNurseCalenderSchemaValidator,
  deleteNurseCalenderSchemaValidator,
} = require("../utils/validators/NurseCalenderValidator");

const {
  getNurseCalenders,
  getNurseCalender,
  createNurseCalender,
  updateNurseCalender,
  deleteNurseCalender,
} = require("../services/NurseCalender");

const authService = require("../services/Authentication");

const router = express.Router();

router
  .route("/")
  .get(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    getNurseCalenders
  )
  .post(createNurseCalenderSchemaValidator, createNurseCalender); // Added callback function for post method

router
  .route("/:id")
  .get(
    authService.protect,
    authService.allowedTo("admin", "manager", "nurse"),
    getNurseCalenderSchemaValidator,
    getNurseCalender
  )
  .put(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    updateNurseCalenderSchemaValidator,
    updateNurseCalender
  )
  .delete(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    deleteNurseCalenderSchemaValidator,
    deleteNurseCalender
  );

module.exports = router;
