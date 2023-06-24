const mongoose = require("mongoose");

// Define Nurse schema
const nurseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },

  experienceYears: {
    type: Number,
  },
  whatsapp: {
    type: String,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  shift: {
    type: String,
    enum: ["Morning", "Afternoon", "Night"],
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true
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
    const imageUrl = `${doc.image}`;
    doc.image = imageUrl;
  }
};
// findOne, findAll and update
nurseSchema.post("init", (doc) => {
  setImageURL(doc);
});

// create
nurseSchema.post("save", (doc) => {
  setImageURL(doc);
});

// Create nurse model
const Nurse = mongoose.model("nurse", nurseSchema);

module.exports = Nurse;
