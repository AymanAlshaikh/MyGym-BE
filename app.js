const express = require("express");
const cors = require("cors");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleWare/passport");
const db = require("./db/models");
const app = express();
const classRoutes = require("./routes/classRoutes");
const userRoutes = require("./routes/userRoutes");
const gymRoutes = require("./routes/gymRoutes");
const typeRoutes = require("./routes/typeRoutes");

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);
app.use("/class", classRoutes);
app.use("/gym", gymRoutes);
app.use("/type", typeRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
  next({ status: 404, message: "path not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: { message: err.message } });
});

const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();
