const mongoose = require("mongoose");
const ContactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

  },
  {
    Timestamps: false,
  }
);

const Contact = mongoose.model("Conatact", ContactSchema);
module.exports = Contact;
