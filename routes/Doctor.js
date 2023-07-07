const express = require("express");

const {
  getDoctorValidator,
  createDoctorValidator,
  updateDoctorValidator,
  deleteDoctorValidator,
} = require("../utils/validators/doctorValidator");

const {
  getDoctors,
  getDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  // uploadDoctorImage,
  // resizeImage,
} = require("../services/Doctor");

const authService = require("../services/Authentication");
const { uploadPhoto } = require("../middlewares/mullter");
let type = uploadPhoto.single("image");
const router = express.Router();

router
  .route("/")
  .get(getDoctors)
  .post(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    type,
    // resizeImage,
    createDoctorValidator,
    createDoctor
  ); // Added callback function for post method

router
  .route("/:id")
  .get(getDoctorValidator, getDoctor)
  .put(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    type,
    updateDoctorValidator,
    updateDoctor
  )
  .delete(
    authService.protect,
    authService.allowedTo("admin"),
    deleteDoctorValidator,
    deleteDoctor
  );

module.exports = router;
