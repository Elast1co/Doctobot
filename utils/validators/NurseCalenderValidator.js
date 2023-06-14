const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/ValidatorMiddleware");

exports.createNurseCalenderSchemaValidator = [
  // weekday
  check("weekday").notEmpty().withMessage("Weekday is required!!"),
  // date
  check("date").notEmpty().withMessage("Date is required!!"),
  // startAt
  check("startAt").notEmpty().withMessage("Start At Time is required!!"),
  // endAt
  check("endAt").notEmpty().withMessage("End At Time is required!!"),
  // duration
  check("duration").notEmpty().withMessage("Duration is required!!"),
  // Nurse
  check("Nurse").notEmpty().withMessage("Nurse ID required!!"),
];
exports.getNurseCalenderSchemaValidator = [
  check("id").isMongoId().withMessage("Invalid Reservation id format"),
  validatorMiddleware,
];

exports.updateNurseCalenderSchemaValidator = [
  check("id").isMongoId().withMessage("Invalid Reservation id format"),
  validatorMiddleware,
];

exports.deleteNurseCalenderSchemaValidator = [
  check("id").isMongoId().withMessage("Invalid Reservation id format"),
  validatorMiddleware,
];
