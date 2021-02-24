const { Type, Class } = require("../db/models");

exports.fetchType = async (typeId, next) => {
  try {
    const found = await Type.findByPk(typeId);
    return found;
  } catch (error) {
    next(error);
  }
};

exports.typeList = async (req, res, next) => {
  try {
    const type = await Type.findAll();

    res.json(type);
  } catch (error) {
    next(error);
  }
};

// exports.newType = async (req, res, next) => {
//   try {
//     const newType = await Type.create(req.body);
//     res.json(newType);
//     res.status(201);
//   } catch (error) {
//     next(error);
//   }
// };

exports.removeType = async (req, res, next) => {
  try {
    await req.whatever.destroy();
    res.status(204);
    res.end();
  } catch (error) {
    next(error);
  }
};

exports.newClass = async (req, res, next) => {
  try {
    req.body.type = req.whatever.name;
    req.body.typeId = req.whatever.id;
    const newClass = await Class.create(req.body);
    res.json(newClass);
    res.status(201);
  } catch (error) {
    next(error);
  }
};
