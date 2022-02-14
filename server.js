const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./app/models");
const Role = db.role;

/*

db.sequelize.sync({force:true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

*/

app.get("/", (req, res) => {
  res.json({ message: "Gestion conge backend test !" });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/admin.routes')(app);
require('./app/routes/employe.routes')(app);
require('./app/routes/rh.routes')(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/*
function initial() {
  Role.create({
    id: 1,
    name: "employe"
  });
 
  Role.create({
    id: 2,
    name: "rh"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });

}

*/