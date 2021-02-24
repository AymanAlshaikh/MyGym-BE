const express = require("express");
const router = express.Router();
const {
  typeList,
  newType,
  removeType,
  fetchType,
  newClass,
} = require("../controllers/typeControlleres");
const passport = require("passport");

router.param("typeId", async (req, res, next, typeId) => {
  const typees = await fetchType(typeId, next);
  if (typees) {
    req.whatever = typees;
    next();
  } else {
    next({ message: "type does not exist", status: 404 });
  }
});

router.get("/", typeList);
//router.post("/", newType);
router.post("/:typeId/class", newClass);
router.delete("/:typeId", removeType);

module.exports = router;
