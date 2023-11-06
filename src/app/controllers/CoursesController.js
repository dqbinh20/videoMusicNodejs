const Course = require("./models/collection1");
const { mongooseToObject } = require("../../util/mongoose");

class CoursesController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render("courses/create");
  }

  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then((Course) => {
        res.redirect("/my/stored/courses");
      })
      .catch(next);
  }

  edit(req, res, next) {
    res.render("courses/edit", {
      course: req.query,
      id: req.params.id,
    });
  }

  // PUT /courses/:id
  update(req, res, next) {
    Course.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/my/stored/courses"))
      .catch(next);
  }

  // DELETE /courses/:id
  detroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // GET /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
