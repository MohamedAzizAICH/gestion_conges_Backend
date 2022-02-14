module.exports = (sequelize, Sequelize) => {

    const Conge = sequelize.define("conge", {

      startDate: {
        type: Sequelize.DATEONLY
      },
     daysOffNumber: {
        type: Sequelize.INTEGER
      },
      reasonForLeave: {
        type: Sequelize.STRING
      },
      requestStatus: {
        type: Sequelize.STRING,
        defaultValue: "En cour",
      },
     
    });
    return Conge;
  };