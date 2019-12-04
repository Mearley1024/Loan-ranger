'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lender = sequelize.define('Lender', {
    institution: DataTypes.STRING,
    loanType: DataTypes.STRING,
    contactInfo: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER
  }, {});
  Lender.associate = function(models) {
    // associations can be defined here
    Lender.hasMany(models.LoanType,{
      onDelete:"cascade"

    })
  };
  return Lender;
};