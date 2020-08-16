const db = require("../models");
const Info = db.info;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  //res.status(200).send("Admin Content.");
  console.log("alive")
  //res.render('admin.ejs', { personalinfo: results })
  console.log(Info)
  Info.find({}, function (err, docs) {
    // docs.forEach
    //console.log(docs);
    res.render('./admin.ejs', {personalinfo: docs})
    //res.send(docs)
  });
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};