const mongoose = require("mongoose");
const router = require("express").Router();
const express = require("express");
const cors = require("cors");
const Contact = require("../../models/contact");

const app = express();
app.use(express.json());
app.use(cors());

// get all messages
router.route("/").get((req, res) => {
  Contact.find()
    .sort({ _id: -1 })
    .then(contact => res.json(contact))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const { name, email, subject, message } = req.body;
  const newContact = new Contact({
    name,
    email,
    subject,
    message
  });
  newContact
    .save()
    .then(() => res.json("Votre message vient d'étre envoyé!"))
    .catch(err => res.status(400).json("Error:") + err);
});

//Delete contact
router.route("/:id").delete((req, res) => {
  Contact.findOneAndDelete(req.params.id)
    .then(() => res.json("le message vient d'étre supprimé"))
    .catch(err => res.status(400).json("Error :") + err);
});

module.exports = router;
