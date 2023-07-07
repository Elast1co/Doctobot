// const sharp = require("sharp");
const fs = require("fs");

// const { v4: uuidv4 } = require("uuid");
const asyncHandler = require("express-async-handler");

const factory = require("./HandlersFactory");
// const  uploadSingleImage  = require("../middlewares/mullter");
const { cloudinaryUploadImage } = require("../middlewares/Cloudinary");
const Category = require("../models/Category");

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

// @desc    Get list of categories
// @route   GET /api/v1/categories
// @access  Public
exports.getCategories = factory.getAll(Category);

// @desc    Get specific category by id
// @route   GET /api/v1/categories/:id
// @access  Public
exports.getCategory = factory.getOne(Category);

// @desc    Create category
// @route   POST  /api/v1/categories
// @access  Private/Admin-Manager
exports.createCategory = factory.createOne(Category);

// @desc    Update specific category
// @route   PUT /api/v1/categories/:id
// @access  Private/Admin-Manager
exports.updateCategory = factory.updateOne(Category);

// @desc    Delete specific category
// @route   DELETE /api/v1/categories/:id
// @access  Private/Admin
exports.deleteCategory = factory.deleteOne(Category);
