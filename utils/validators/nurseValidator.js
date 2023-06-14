const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/ValidatorMiddleware");

exports.createNurseValidator = [
  // name
  check("name")
    .isLength({ min: 3 })
    .withMessage("Must be at least 3 chars")
    .notEmpty()
    .withMessage("Nurse Name Required!!"),
  // Age
  check("age")
    .notEmpty()
    .withMessage("Age Required !!")
    .isNumeric()
    .withMessage("Age is Number !!"),
  // shift
  check("shift")
    .notEmpty()
    .withMessage(" your shift is : Morning , Afternoon or night ??"),
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
    .withMessage("Please Enter an Email"),
  //address
  check("address").notEmpty().withMessage("address required"),
  validatorMiddleware,
];

exports.getNurseValidator = [
  check("id").isMongoId().withMessage("Invalid Nurse id format"),
  validatorMiddleware,
];

exports.updateNurseValidator = [
  check("id").isMongoId().withMessage("Invalid Nurse id format"),
  validatorMiddleware,
];

exports.deleteNurseValidator = [
  check("id").isMongoId().withMessage("Invalid Nurse id format"),
  validatorMiddleware,
];
