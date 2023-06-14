const mongoose = require("mongoose");
const { string } = require("sharp/lib/is");

const NurseCalendar = new mongoose.Schema(
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
      type: string,
    },
    nurse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nurse",
      
    },
  },
  { discriminatorKey: "calender" }
);
module.exports = mongoose.model("NurseCalender", NurseCalendar);
