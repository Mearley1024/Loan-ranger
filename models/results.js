'use strict';
module.exports = (sequelize, DataTypes) => {
  const Results = sequelize.define('Results', {
    institution: DataTypes.STRING,
    loanType: DataTypes.STRING,
    terms: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    maxQuantity: DataTypes.INTEGER,
    rates: DataTypes.INTEGER

  }, {});
  Results.associate = function (models) {
    // associations can be defined here
    Results.belongsTo(models.LoanType, {
      foreignKey: {
        allowNull: false
      }
    })
    Results.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
    Results.hasOne(models.Match)
  }


  return Results;
}