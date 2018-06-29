module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        imageString: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hours: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        points: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }

    });

    // User.associate = function (models) {
    //     User.hasMany(models.activity, {
    //         onDelete: "cascade"
    //     });
    // //     User.hasOne(models.User_Event_Bridge);
    // };
    return User;
}