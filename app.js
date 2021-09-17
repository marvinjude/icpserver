const express = require("express");
const usersRouter = require("./router/users");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", usersRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    success: false,
    message: "Internal Server Error",
  });
});

module.exports = app;
