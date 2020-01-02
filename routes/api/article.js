const router = require("express").Router();
const express = require("express");
const cors = require("cors");
var cloudinary = require("cloudinary");
const path = require("path");
const multer = require("multer");
const Article = require("../../models/article");

const app = express();
app.use(express.json());
app.use(cors());
// get all articles
router.route("/").get((req, res) => {
  Article.find()
    .then(article => res.json(article))
    .catch(err => res.status(400).json("Error:" + err));
});

// get only the first three articles
router.route("/3").get((req, res) => {
  Article.find()
    .limit(2)
    .sort({ _id: -1 })
    .then(article => res.json(article))
    .catch(err => res.status(400).json("Error:" + err));
});
// get all articles after the frist three
router.route("/after").get((req, res) => {
  Article.find()
    .skip(2)
    .sort({ _id: -1 })
    .then(article => res.json(article))
    .catch(err => res.status(400).json("Error:" + err));
});

// add a new article
router.route("/add").post((req, res) => {
  const articleFields = ({
    title,
    author,
    imageURL,
    imageLegend,
    text
  } = req.body);
  if (!imageURL) {
    return res.json("Il faut ajouter un image");
  }
  const newArticle = new Article(articleFields);
  newArticle
    .save()
    .then(() => res.json("L'article est ajouté avec succès"))
    .catch(err => res.status(400).json("Error: " + err));
});

//update an article by id
router.route("/update/:id").post((req, res) => {
  Article.findById(req.params.id)
    .then(article => {
      article.author = req.body.author;
      article.title = req.body.title;
      article.imageLegend = req.body.imageLegend;
      article.text = req.body.text;
      article
        .save()
        .then(() => res.json("L'article vient d'être modifié"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});
// get an article by ID
router.route("/:id").get((req, res) => {
  Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json("Error: " + err));
});

// Delete an article by Id
router.route("/:id").delete((req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json("l'Article vient d'étre Supprimé avec succès..."))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
