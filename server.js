const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// DB Config
const port = process.env.PORT || 5000;
const db = process.env.mongoURI;
// Connect to MongoDB
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
// Use Routes
app.use("/api/event", require("./routes/api/event"));
app.use("/api/admin", require("./routes/api/admin"));
app.use("/api/contact", require("./routes/api/contact"));
app.use("/api/article", require("./routes/api/article"));
app.use("/api/article", require("./routes/api/article"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
app.listen(port, () => console.log(`Server running on port ${port}`));
