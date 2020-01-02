const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    text: { type: String, required: true },
    imageURL: { type: String },
    imageLegend: { type: String }
  },
  {
    timestamps: true
  }
);

const article = mongoose.model("article", articleSchema);

module.exports = article;
