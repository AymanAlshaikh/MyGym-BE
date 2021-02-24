const SequelizeSlugify = require("sequelize-slugify");
const Types = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    "Type",
    {
      slug: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: { unique: true, type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
  SequelizeSlugify.slugifyModel(Type, {
    source: ["name"],
  });
  return Type;
};
module.exports = Types;
