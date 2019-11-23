'use strict';
module.exports = (sequelize, DataTypes) => {
  const LoanType = sequelize.define('LoanType', {
    loanType: DataTypes.STRING,
    terms: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    maxQuantity: DataTypes.INTEGER,
    rates: DataTypes.INTEGER
  }, {});
  LoanType.associate = function(models) {
    // associations can be defined here
    LoanType.belongsTo(models.Lender,{
      foreignKey: {
        allowNull: false
    }
    })
    LoanType.hasMany(models.Match, {
      onDelete:'cascade'
    })
    
  };
  return LoanType;
};