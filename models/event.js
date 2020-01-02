const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const eventSchema = new Schema({
  name: { type: String },
  date: { type: String },
  time: { type: String },
  description: { type: String },
  address: { type: String },
  img: { type: String }
});

const event = mongoose.model("event", eventSchema);

module.exports = event;
