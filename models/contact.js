const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String },
    message: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const contact = mongoose.model("contact", contactSchema);

module.exports = contact;