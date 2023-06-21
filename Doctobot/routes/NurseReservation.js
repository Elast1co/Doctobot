const express = require("express");

const {
  getReserNurseSchemaValidator,
  createReserNurseSchemaValidator,
  updateReserNurseSchemaValidator,
  deleteReserNurseSchemaValidator,
} = require("../utils/validators/reserNurseValidator");

const authService = require("../services/Authentication");

const {
  getReserNurses,
  getReserNurse,
  createReserNurse,
  updateReserNurse,
  deleteReserNurse,
} = require("../services/NurseReservation");

const router = express.Router();

router
  .route("/")
  .get(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    getReserNurses
  )
  .post(createReserNurseSchemaValidator, createReserNurse); // Added callback function for post method

router
  .route("/:id")
  .get(
    authService.protect,
    authService.allowedTo("admin", "manager", "nurse"),
    getReserNurseSchemaValidator,
    getReserNurse
  )
  .put(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    updateReserNurseSchemaValidator,
    updateReserNurse
  )
  .delete(
    authService.protect,
    authService.allowedTo("admin"),
    deleteReserNurseSchemaValidator,
    deleteReserNurse
  );

module.exports = router;
