module.exports = function (sequelize, DataTypes) {
    var User_Event_Bridge = sequelize.define("User_Event_Bridge", {
        hours: {
            type: DataTypes.INTEGER,
        },
        points: {
            type: DataTypes.INTEGER,
        },
        saved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        validated: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        attending: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        denied: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        activityID: {
            type: DataTypes.STRING,
        },
        userID: {
            type: DataTypes.STRING
        }


    });

    User_Event_Bridge.associate = function (models) {
        // User_Event_Bridge.hasMany(models.Activity),
        // User_Event_Bridge.hasMany(models.User)
        User_Event_Bridge.hasOne(models.Activity)
    };
    return User_Event_Bridge;
}