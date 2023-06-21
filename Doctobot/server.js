const path = require("path");

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors"); 

dotenv.config({ path: "config.env" });
const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/ErrorMiddleware");
const dbConnection = require("./config/database");
// Routes
const categoryRoute = require("./routes/Category");
const doctorRoute = require("./routes/Doctor");
const nurseRoute = require("./routes/Nurse");
const reserDoctorRoute = require("./routes/DoctorReservation");
const reserNurseRoute = require("./routes/NurseReservation");
const DoctorCalenderRoute = require("./routes/DoctorCalender");
const NurseCalenderRoute = require("./routes/NurseCalender");
const userRoute = require("./routes/User");
const authRoute = require("./routes/Authentication");
// Connect with db
dbConnection();

// express app
const app = express();

// Middlewares
app.use(cors()); 
app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// Mount Routes
app.use("/doctobot/categories", categoryRoute);
app.use("/doctobot/doctors", doctorRoute);
app.use("/doctobot/nurses", nurseRoute);
app.use("/doctobot/reservations/doctors", reserDoctorRoute);
app.use("/doctobot/reservations/nurses", reserNurseRoute);
app.use("/doctobot/calenders/doctors", DoctorCalenderRoute);
app.use("/doctobot/calenders/nurses", NurseCalenderRoute);
app.use("/doctobot/users", userRoute);
app.use("/doctobot/auth", authRoute);

app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
});

// Global error handling middleware for express
app.use(globalError);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Doctobot Is Working !! , Have Fun =)`);
});

// Handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});
