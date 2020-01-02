const mongoose = require("mongoose");
const router = require("express").Router();
const express = require("express");
const cors = require("cors");
const Event = require("../../models/event");

const app = express();
app.use(express.json());
app.use(cors());

// get all messages
router.route("/").get((req, res) => {
  Event.find()
    .sort({ _id: -1 })
    .then(event => res.json(event))
    .catch(err => res.status(400).json("Error:" + err));
});
router.route("/one").get((req, res) => {
  Event.find()
    .limit(1)
    .sort({ _id: -1 })
    .then(event => res.json(event))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const eventFields = ({
    name,
    time,
    img,
    date,
    address,
    description
  } = req.body);
  const newEvent = new Event(eventFields);
  newEvent
    .save()
    .then(() => res.json("OK"))
    .catch(err => res.status(400).json("Error: " + err));
});

//Delete Event
router.route("/:id").delete((req, res) => {
  Event.findOneAndDelete(req.params.id)

    .then(() => res.json("Evenement supprimé"))
    .catch(err => res.status(400).json("Error :") + err);
});

module.exports = router;
