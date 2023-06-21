const mongoose = require("mongoose");

const DoctorCalendar = new mongoose.Schema(
  {
    weekday: {
      type: String,
      enum: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
    },
    date: {
      type: String,
    },
    startAt: {
      type: String,
    },
    endAt: {
      type: String,
    },
    duration: {
      type: Number,
      enum: [5, 15, 30, 60],
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  { discriminatorKey: "calender" }
);
module.exports = mongoose.model("DoctorCalender", DoctorCalendar);
