const db = require("../models");
const User = db.user;
const Conge = db.conge;




// Show the employe balance using his id

 exports.showEmployeBalance = ( req, res) => {
    User.findOne({ where : {id : req.params.id}
    }).then( data =>  res.status(200).send(data) 
    ).catch(err => {
        res.status(500).send({ message: err.message });
      });
};

// Ask for leave 

 exports.askForLeave = ( req, res) => {
    Conge.create({
        startDate: req.body.startDate,
        daysOffNumber: req.body.daysOffNumber,
        reasonForLeave: req.body.reasonForLeave,
        user_id: req.params.id
      }).then( () => res.status(200).send("LeaveRequest done !") 
      ).catch(err => {
        res.status(500).send({ message: err.message });
      });
};

// Show employe request status using his id

 exports.showRequestStatus = ( req, res) => {
    
    Conge.findAll({ where : {user_id : req.params.id}})
    .then(data => {
     if (data.length == 0) {
         res.status(201).send("you don't have any request");
     }
     else {
         res.status(200).send(data);
     }
 })
 .catch(err => {
     res.status(500).send({
         message:
         err.message || "erreur !"
     });
 });  
};