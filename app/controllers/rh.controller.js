const { conge, user } = require("../models");
const db = require("../models");
const User = db.user;
const Conge = db.conge;

// List of all employees leave request

 exports.showEmployeRequest = (req, res) => {
 Conge.findAll({where : {requestStatus:'En cour'}})
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

// Accept leave request 

 exports.acceptEmployeRequest = ( req, res) => {
    Conge.update(
       {requestStatus : 'Accepté'},  
       { where : { id: req.params.id }}
    )
     .then(()=> res.send("Request accepted !"))
     .catch(err => {
            res.status(500).send({
            message:
            err.message || "erreur !"
      });
    }); 
};

// Refuse leave request

 exports.refuseEmployeRequest = ( req, res) => {
    Conge.update(
       {requestStatus : 'Réfusé'},  
       { where : { id: req.params.id }}
     ).then(()=> res.send("Request refused !")).catch(err => {
            res.status(500).send({
            message:
            err.message || "erreur !"
      });
    }); 
};

// edit employe  balance 

 exports.editBalance= async ( req, res) => { 

  const userInfo = await User.findOne({ where : {id : req.params.id2}
  })
  console.log(userInfo.balance)
  
  const requestCongeInfo =  await Conge.findOne({ where : {user_id : req.params.id2 ,
  id: req.params.id}
  })
  console.log(requestCongeInfo.daysOffNumber)
  
  const newBalance = userInfo.balance - requestCongeInfo.daysOffNumber
  console.log(newBalance)
  User.update(
     {balance : newBalance},  
     { where : { id: req.params.id2 }}
   ).then(()=> res.send("balance modified !")).catch(err => {
          res.status(500).send({
          message:
          err.message || "erreur !"
    });
  }); 
};




