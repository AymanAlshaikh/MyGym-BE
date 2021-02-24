const SequelizeSlugify = require("sequelize-slugify");
const Gyms = (sequelize, DataTypes) => {
  const Gym = sequelize.define(
    "Gym",
    {
      slug: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: { unique: true, type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
  SequelizeSlugify.slugifyModel(Gym, {
    source: ["name"],
  });
  return Gym;
};
module.exports = Gyms;
