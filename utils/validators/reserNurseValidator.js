const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/ValidatorMiddleware");

exports.createReserNurseSchemaValidator = [
  // doctor
  check("doctor").notEmpty().withMessage("doctor Id required!!"),
  // start
  check("start").notEmpty().withMessage("Add Start time !!"),
  // end
  check("end").optional(),
  // time
  check("time").notEmpty().withMessage("time is required!!"),
  // reservation name
  check("name").notEmpty().withMessage("Reservation name required!!"),
  // phone
  check("phone").notEmpty().withMessage("Phone is required!!"),
  // reservation place
  check("reservationPlace")
    .notEmpty()
    .withMessage("Reservation place required!!"),
  // Total Paid
  check("totalPaid").notEmpty().withMessage("Total Paid required!!"),
  // Paid At
  check("paidAt").notEmpty().withMessage("Paid At required!!"),
];
exports.getReserNurseSchemaValidator = [
  check("id").isMongoId().withMessage("Invalid Reservation id format"),
  validatorMiddleware,
];

exports.updateReserNurseSchemaValidator = [
  check("id").isMongoId().withMessage("Invalid Reservation id format"),
  validatorMiddleware,
];

exports.deleteReserNurseSchemaValidator = [
  check("id").isMongoId().withMessage("Invalid Reservation id format"),
  validatorMiddleware,
];
