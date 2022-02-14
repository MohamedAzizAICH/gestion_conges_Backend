const controller = require("../controllers/rh.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.get("/api/rh/showEmployeRequest", controller.showEmployeRequest);

    app.put("/api/rh/acceptEmployeRequest/:id", controller.acceptEmployeRequest);

    app.put("/api/rh/editBalance/:id/:id2", controller.editBalance);

    app.put("/api/rh/refuseEmployeRequest/:id", controller.refuseEmployeRequest);






};