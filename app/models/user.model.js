module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      name: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      adress: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.DATEONLY
      },
      balance: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      activatedAccount: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
    return User;
  };