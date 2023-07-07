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
} = require("../services/Nurse");

const { uploadPhoto } = require("../middlewares/mullter");
let type = uploadPhoto.single("image");
const router = express.Router();

router
  .route("/")
  .get(getNurses)
  .post(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    type,
    // resizeImage,
    createNurseValidator,
    createNurse
  ); // Added callback function for post method

router
  .route("/:id")
  .get(getNurseValidator, getNurse)
  .put(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    type,
    updateNurse
  )
  .delete(
    authService.protect,
    authService.allowedTo("admin", "manager"),
    deleteNurseValidator,
    deleteNurse
  );

module.exports = router;
