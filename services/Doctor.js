// const sharp = require("sharp");
// const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const asyncHandler = require("express-async-handler");

const factory = require("./HandlersFactory");
const { uploadSingleImage } = require("../middlewares/mullter");
const { cloudinaryUploadImage } = require("../middlewares/Cloudinary");
const Doctor = require("../models/Doctor");

// Upload single image
exports.uploadDoctorImage = uploadSingleImage("image");

exports.resizeImage = asyncHandler(async (req, res, next) => {
  // const filename = `category-${uuidv4()}-${Date.now()}.jpeg`;

  if (req.file) {
    const imagePath = req.file.path;

    const uploadedImage = await cloudinaryUploadImage(imagePath);

    if (uploadedImage.error) {
      // Handle error uploading image to Cloudinary
      return next(new Error("Failed to upload image to Cloudinary"));
    }

    // Remove the original uploaded file
    fs.unlinkSync(imagePath);

    // Save Cloudinary image URL into req.body
    req.body.image = uploadedImage.secure_url;
  }

  next();
});

// Get list of doctors
exports.getDoctors = factory.getAll(Doctor);

// Get specific doctor by id
exports.getDoctor = factory.getOne(Doctor);

// Create doctor
exports.createDoctor = factory.createOne(Doctor);

// Update specific doctor
exports.updateDoctor = factory.updateOne(Doctor);

// Delete specific doctor
exports.deleteDoctor = factory.deleteOne(Doctor);
