const express = require("express");

const {
  getNurseValidator,
  createNurseValidator,
  updateNurseValidator,
  deleteNurseValidator,
} = require("../utils/validators/nurseValidator");

const authService = require("../services/Authentication");

const {
  getNurses,
  getNurse,
  createNurse,
  updateNurse,
  deleteNurse,
  uploadNurseImage,
  resizeImage,
} = require("../services/Nurse");

const router = express.Router();

router
  .route("/")
  .get(getNurses)
  .post(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    uploadNurseImage,
    resizeImage,
    createNurseValidator,
    createNurse
  ); // Added callback function for post method

router
  .route("/:id")
  .get(getNurseValidator, getNurse)
  .put(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    updateNurseValidator,
    updateNurse
  )
  .delete(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    deleteNurseValidator,
    deleteNurse
  );

module.exports = router;
