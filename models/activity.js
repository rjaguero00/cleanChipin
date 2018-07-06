module.exports = function (sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        time: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hours: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
    Activity.associate = function (models) {
        //     Activity.belongsTo(models.User, {


        //         // Activity.hasMany(models.User, {
        //             foreignKey: {
        //                 allowNull: false
        //             }

        //     });

        //Test Erase
        // Activity.belongsTo(models.User_Event_Bridge);
        // Activity.belongsToMany(models.User, { through: models.User_Event_Bridge });
        // Activity.hasMany(models.User);
    };

    return Activity;
};
