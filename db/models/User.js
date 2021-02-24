const sequelize = require("sequelize");

const Users = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: { type: DataTypes.STRING, allowNull: false, unique: true },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
  return User;
};
module.exports = Users;
