const controller = require("../controllers/admin.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });


    app.get("/api/admin/getAllEmploye",controller.getAllEmploye);

    app.delete("/api/admin/delete/:id", controller.deleteEmploye);

    app.get("/api/admin/getAllInscription",  controller.getAllInscription);

    app.put("/api/admin/activeAccount/:id", controller.activeAccount);

    app.put("/api/admin/addSolde/:id", controller.addSolde);

    app.put("/api/admin/makeRH/:id", controller.makeRH);

   

};