const { Class } = require("../db/models");

exports.fetchClass = async (classId, next) => {
  try {
    const found = await Class.findByPk(classId);
    return found;
  } catch (error) {
    next(error);
  }
};

exports.classList = async (req, res, next) => {
  try {
    const classs = await Class.findAll();

    res.json(classs);
  } catch (error) {
    next(error);
  }
};

// exports.newClass = async (req, res, next) => {
//   try {
//     const newClass = await Class.create(req.body);
//     res.json(newClass);
//     res.status(201);
//   } catch (error) {
//     next(error);
//   }
// };

exports.removeClass = async (req, res, next) => {
  try {
    await req.whatever.destroy();
    res.status(204);
    res.end();
  } catch (error) {
    next(error);
  }
};
