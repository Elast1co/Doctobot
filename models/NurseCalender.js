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
    month: {
      type: String,
      enum: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
    },
    day: {
      type: Number,
      min:1,
      max:30
    },
    startAt: {
      type: String,
    },
    endAt: {
      type: String,
    },
    statys: {
      type: string,
      enum: ["Avilable " , "Busy"],
    },
    nurse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nurse",
    },
  },
  { discriminatorKey: "calender" }
);
module.exports = mongoose.model("DoctorCalender", DoctorCalendar);
