module.exports = function (sequelize, DataTypes) {
    var Organization = sequelize.define("Organization", {
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
        }
    });
    Organization.associate = function (models) {
        Organization.hasMany(models.Activity, {
            onDelete: "cascade"
        });
        Organization.hasOne(models.User_Event_Bridge);
    };
    return Organization;
}