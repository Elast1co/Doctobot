const mongoose = require("mongoose");

// Define Doctor schema
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  specialiaty: {
    type: String,
    enum: [
      "Cardiology",
      "Dermatology",
      "Endocrinology",
      "Gastroenterology",
      "Neurology",
      "Oncology",
      "Pediatrics",
      "Psychiatry",
      "Surgery",
      "Other",
    ],
    required: true,
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true
  },
  educationYears: {
    type: String,
  },
  whatsapp: {
    type: String,
  },
  experienceYears: {
    type: Number,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
const setImageURL = (doc) => {
  if (doc.image) {
    const imageUrl = `${process.env.BASE_URL}/doctors/${doc.image}`;
    doc.image = imageUrl;
  }
};
// findOne, findAll and update
doctorSchema.post("init", (doc) => {
  setImageURL(doc);
});

// create
doctorSchema.post("save", (doc) => {
  setImageURL(doc);
});

// Create Doctor model
const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
