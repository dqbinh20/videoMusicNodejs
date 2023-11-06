const siteRouter = require("./site");
const learningRouter = require("./learning");
const soursesRouter = require("./courses");
const myRouter = require("./my");

function route(app) {
  app.use("/learning", learningRouter);
  app.use("/courses", soursesRouter);
  app.use("/my", myRouter);
  app.use("/", siteRouter);
}

module.exports = route;
