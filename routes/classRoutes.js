const express = require("express");
const router = express.Router();
const {
  classList,
  newClass,
  removeClass,
  fetchClass,
} = require("../controllers/classControlleres");
const passport = require("passport");

router.param("classId", async (req, res, next, classId) => {
  const classes = await fetchClass(classId, next);
  if (classes) {
    req.whatever = classes;
    next();
  } else {
    next({ message: "class does not exist", status: 404 });
  }
});

router.get("/", classList);
//router.post("/", newClass);
router.delete("/:classId", removeClass);

module.exports = router;
