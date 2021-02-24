const express = require("express");
const router = express.Router();
const {
  gymList,
  newGym,
  removeGym,
  fetchGym,
  newClass,
  newType,
} = require("../controllers/gymControlleres");
const passport = require("passport");

router.param("gymId", async (req, res, next, gymId) => {
  const gymes = await fetchGym(gymId, next);
  if (gymes) {
    req.whatever = gymes;
    next();
  } else {
    next({ message: "gym does not exist", status: 404 });
  }
});

router.get("/", gymList);
router.post("/", newGym);
router.post("/:gymId/type", newType);
router.delete("/:gymId", removeGym);

module.exports = router;
