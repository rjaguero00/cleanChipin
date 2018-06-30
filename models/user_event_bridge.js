module.exports = function (sequelize, DataTypes) {
    var User_Event_Bridge = sequelize.define("User_Event_Bridge", {
        hours: {
            type: DataTypes.INTEGER,
        },
        points: {
            type: DataTypes.INTEGER,
        }

    });

    User_Event_Bridge.associate = function (models) {
        // User_Event_Bridge.hasMany(models.Activity),
        User_Event_Bridge.hasMany(models.User)
        User_Event_Bridge.hasOne(models.Activity)
    };
    return User_Event_Bridge;
}