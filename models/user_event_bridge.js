module.exports = function (sequelize, DataTypes) {
    var User_Event_Bridge = sequelize.define("User_Event_Bridge", {
        creator: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        volunteer: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        saved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        attending: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },        
        hours: {
            type: DataTypes.INTEGER
        },
        points: {
            type: DataTypes.INTEGER
        },
        validated: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        denied: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    User_Event_Bridge.associate = function (models) {
        // User_Event_Bridge.hasMany(models.Activity),
        // User_Event_Bridge.hasMany(models.User)

        //Testing removing hasOne and replace with belongsTo
        // User_Event_Bridge.hasOne(models.Activity)
        
        
        // User_Event_Bridge.belongsTo(models.Activity,{


        //     // Activity.hasMany(models.User, {
        //     foreignKey: {
        //         allowNull: false
        //     }

        // });
    };
    return User_Event_Bridge;
}