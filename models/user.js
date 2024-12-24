const bcrypt = require('bcryptjs');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      paranoid: true,
    }
  );

  User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  });

  return User;
};
