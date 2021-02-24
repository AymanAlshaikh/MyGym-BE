const { Gym, Type } = require("../db/models");

exports.fetchGym = async (gymId, next) => {
  try {
    const found = await Gym.findByPk(gymId);
    return found;
  } catch (error) {
    next(error);
  }
};

exports.gymList = async (req, res, next) => {
  try {
    const gym = await Gym.findAll();

    res.json(gym);
  } catch (error) {
    next(error);
  }
};

exports.newGym = async (req, res, next) => {
  try {
    const newGym = await Gym.create(req.body);
    res.json(newGym);
    res.status(201);
  } catch (error) {
    next(error);
  }
};

exports.removeGym = async (req, res, next) => {
  try {
    await req.whatever.destroy();
    res.status(204);
    res.end();
  } catch (error) {
    next(error);
  }
};

exports.newType = async (req, res, next) => {
  try {
    req.body.gymId = req.whatever.id;
    const newType = await Type.create(req.body);
    res.json(newType);
    res.status(201);
  } catch (error) {
    next(error);
  }
};
