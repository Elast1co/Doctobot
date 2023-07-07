// const multer = require("multer");
// const ApiError = require("../utils/apiError");

// const multerOptions = () => {
//   const multerStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads/categories"); // Specify the directory where files should be saved
//     },
//     filename: (req, file, cb) => {
//       console.log(file);
//       const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//       const filename = `category-${uniqueSuffix}-${file.originalname}`;
//       cb(null, filename);
//     },
//   });

//   const multerFilter = function (req, file, cb) {
//     if (file.mimetype.startsWith("image")) {
//       cb(null, true);
//     } else {
//       cb(new ApiError("Only Images allowed", 400), false);
//     }
//   };

//   const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

//   return upload;
// };

// exports.uploadSingleImage = (fieldName) => multerOptions().single(fieldName);

// exports.uploadMixOfImages = (arrayOfFields) =>
//   multerOptions().fields(arrayOfFields);


const multer = require("multer");
const path = require("path");

// Multer config
exports.uploadPhoto = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    console.log(file)
    if (
      ext.toLowerCase() !== ".jpg" &&
      ext.toLowerCase() !== ".jpeg" &&
      ext.toLowerCase() !== ".png" &&
      ext.toLowerCase() !== ".svg"
    ) {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
