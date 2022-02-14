const db = require("../models");
const User = db.user;


// the list of employees who have activated accounts

 exports.getAllEmploye = ( req, res) => {
    User.findAll({ where : {activatedAccount : true}})
    .then(data => {
     if (data.length == 0) {
         res.status(201).send("there is no employe !");
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


// delete an employe 

 exports.deleteEmploye = (req, res) => {
    User.destroy( { where: {id:req.params.id}}).then( ()=>  res.status(200).send("employe is deleted !") )
  }


// the list of employees who have non-activated

  exports.getAllInscription = ( req, res) => {
    User.findAll({ where : {activatedAccount : false}})
    .then(data => {
     if (data.length == 0) {
         res.status(201).send("there is no inscription !");
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


// Active an employe account using his id 

  exports.activeAccount = ( req, res) => {
       User.update(
           {activatedAccount : true},
           { where : { id: req.params.id }}
       ).then(()=> res.send("Account activated ! ")).catch(err => {
        res.status(500).send({
            message:
            err.message || "erreur !"
        });
    }); 
  };

// Add employe balance using his id

  exports.addSolde = ( req, res) => {
    User.update(
        {balance : req.body.balance},  
        { where : { id: req.params.id }}
    ).then(()=> res.send("Add balance succeed !")).catch(err => {
     res.status(500).send({
         message:
         err.message || "erreur !"
     });
 }); 
};

// Add RH role to employe using his id 

 exports.makeRH = ( req, res) => {
  User.findOne({
   where : {id : req.params.id}
  })
    .then(user => {
        user.setRoles([1,2]).then(() => {
          res.send({ message: "Role RH was added successfully!" });
        })
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};








