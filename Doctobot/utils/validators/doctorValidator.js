const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/ValidatorMiddleware");

exports.createDoctorValidator = [
  // name
  check("name")
    .isLength({ min: 3 })
    .withMessage("Must be at least 3 chars")
    .notEmpty()
    .withMessage("Doctor Name Required!!"),
  // specialiaty
  check("specialiaty").notEmpty().withMessage("specialiaty Required!!"),
  //edu
  check("educationYears").notEmpty().withMessage("education years Required !!"),
  //experience
  check("experienceYears").notEmpty().withMessage("experience Years required"),
  //contact number
  check("contactNumber").notEmpty().withMessage("contact Number required"),
  //whatsapp
  check("whatsapp").notEmpty().withMessage("whatsapp link is required"),
  //email
  check("email")
    .notEmpty()
    .withMessage("email required")
    .isEmail()
    .withMessage("Please Enter an Email")
    .withMessage("Please Enter Unique Email"),
  //address
  check("address").notEmpty().withMessage("address required"),
  validatorMiddleware,
];

exports.getDoctorValidator = [
  check("id").isMongoId().withMessage("Invalid Doctor id format"),
  validatorMiddleware,
];

exports.updateDoctorValidator = [
  check("id").isMongoId().withMessage("Invalid Doctor id format"),
  validatorMiddleware,
];

exports.deleteDoctorValidator = [
  check("id").isMongoId().withMessage("Invalid Doctor id format"),
  validatorMiddleware,
];
