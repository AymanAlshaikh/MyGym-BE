const SequelizeSlugify = require("sequelize-slugify");
const Classes = (sequelize, DataTypes) => {
  const Class = sequelize.define(
    "Class",
    {
      slug: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      numberofseats: {
        type: DataTypes.STRING,
      },
      bookedseats: { type: DataTypes.STRING },
      price: {
        type: DataTypes.FLOAT,
        defaultValue: 5,
        validate: {
          min: 1,
          max: 100,
        },
      },
      type: { type: DataTypes.STRING },
      date: { type: DataTypes.STRING },
      time: { type: DataTypes.STRING },
    },
    { timestamps: false }
  );
  SequelizeSlugify.slugifyModel(Class, {
    source: ["name"],
  });
  return Class;
};
module.exports = Classes;
