const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/ValidatorMiddleware");

exports.createDoctorCalenderSchemaValidator = [
  // weekday
  check("weekday").notEmpty().withMessage("weekday is required!!"),
  // date
  check("date").notEmpty().withMessage("date is required!!"),
  // startAt
  check("startAt").notEmpty().withMessage("Start At Time is required!!"),
  // endAt
  check("endAt").notEmpty().withMessage("End At Time is required!!"),
  // duration
  check("duration").notEmpty().withMessage("Duration is required!!"),
  // doctor
  check("doctor").notEmpty().withMessage("Dctor ID required!!"),
];
exports.getDoctorCalenderSchemaValidator = [
  check("id").isMongoId().withMessage("Invalid Reservation id format"),
  validatorMiddleware,
];

exports.updateDoctorCalenderSchemaValidator = [
  check("id").isMongoId().withMessage("Invalid Reservation id format"),
  validatorMiddleware,
];

exports.deleteDoctorCalenderSchemaValidator = [
  check("id").isMongoId().withMessage("Invalid Reservation id format"),
  validatorMiddleware,
];
