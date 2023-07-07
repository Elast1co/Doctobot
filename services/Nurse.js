// const sharp = require("sharp");
// const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const asyncHandler = require("express-async-handler");

const factory = require("./HandlersFactory");
const Nurse = require("../models/Nurse");

// Upload single image
// exports.resizeImage = asyncHandler(async (req, res, next) => {
//   // const filename = `category-${uuidv4()}-${Date.now()}.jpeg`;

//   if (req.file) {
//     const imagePath = req.file.path;

//     const uploadedImage = await cloudinaryUploadImage(imagePath);

//     if (uploadedImage.error) {
//       // Handle error uploading image to Cloudinary
//       return next(new Error("Failed to upload image to Cloudinary"));
//     }

//     // Remove the original uploaded file
//     fs.unlinkSync(imagePath);

//     // Save Cloudinary image URL into req.body
//     req.body.image = uploadedImage.secure_url;
//   }

//   next();
// });

// Get list of nurses
exports.getNurses = factory.getAll(Nurse);

// Get specific nurse by id
exports.getNurse = factory.getOne(Nurse);

// Create Nurse
exports.createNurse = factory.createOne(Nurse);

// Update specific nurse
exports.updateNurse = factory.updateOne(Nurse);

// Delete specific nurse
exports.deleteNurse = factory.deleteOne(Nurse);
