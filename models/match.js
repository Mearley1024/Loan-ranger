'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    institution: DataTypes.STRING,
    loan: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    rate: DataTypes.INTEGER
  }, {});
  Match.associate = function(models) {
    // associations can be defined here
    Match.belongsTo(models.LoanType, {
      foreignKey: {
          allowNull: false
      }
  })
  Match.belongsTo(models.User, {
      foreignKey: {
          allowNull: false
      }
  })

  };
  return Match;
};