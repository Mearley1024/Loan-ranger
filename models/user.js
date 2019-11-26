'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasOne(models.Lender, {
      onDelete: "cascade"
    })
    User.hasMany(models.Match, {
      onDelete: "cascade"
    })
  };
  return User;
};