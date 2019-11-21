module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return User;
}