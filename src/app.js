const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
require("dotenv").config();
const app = express();

const userRoutes = require("./routes/users");
const authenticationRoutes = require("./routes/authentication");
const taskRoutes = require("./routes/tasks");

applyMiddleware(app);
app.use(userRoutes);
app.use(authenticationRoutes);

app.get("/", (req, res) => {
  res.send("Taskopia Server is running");
});

app.use(taskRoutes);

app.all("*", (req, res, next) => {
  const err = new Error(`The Requested Url is invalid: [${req.url}]`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
