const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;



  exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.employeBoard = (req, res) => {
    res.status(200).send("Employe Content.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  exports.rhBoard = (req, res) => {
    res.status(200).send("Rh Content.");
  };

  