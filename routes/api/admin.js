const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Admin = require("../../models/admin");

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  let pw = req.body.password;
  let salt = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(pw, salt);

  const newAdmin = new Admin({
    name,
    email,
    password
  });
  newAdmin
    .save()
    .then(() => res.json("un Admin a ajouté avec success"))
    .catch(err => res.status(400).json("Error:" + err));
});
//list of admins
router.route("/").get((req, res) => {
  Admin.find()
    .then(admins => res.json(admins))
    .catch(err => res.status(400).json("Error:" + err));
});

// login admin
router.route("/login").post((req, res) => {
  const { email, password } = req.body;

  Admin.findOne({ email: email })
    .then(admin => {
      if (!admin) {
        res.json("Invaled Credentials");
      }

      bcrypt.compare(password, admin.password).then(isMatch => {
        if (isMatch) {
          res.json("OK");
        } else {
          return res.json("Incorrect password");
        }
      });
    })
    .catch(err => res.json("Error : " + err));
});

module.exports = router;
