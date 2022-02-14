const controller = require("../controllers/employe.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });


    app.get("/api/employe/showBalance/:id", controller.showEmployeBalance);

    app.post("/api/employe/askForLeave/:id", controller.askForLeave);

    app.get("/api/employe/showRequestStatus/:id",  controller.showRequestStatus);


};