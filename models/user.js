var bcrypt = require('bcrypt-nodejs');
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
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

    User.associate = function (models) {
        User.hasMany(models.Activity, {
            onDelete: "cascade"
        });
        User.belongsTo(models.User_Event_Bridge);
    };
    User.prototype.comparePassword = function (textpassword, hashpassword) {
        return bcrypt.compareSync(textpassword, hashpassword);
    }
    User.beforeCreate(function (user) {
        return new Promise(function (resolve, reject) {
            const hashPassword = bcrypt.hashSync(user.password);
            user.password = hashPassword;
            return resolve(null, user);
        })
    })


    return User;
}