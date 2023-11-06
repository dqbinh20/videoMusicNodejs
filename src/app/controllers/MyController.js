const collection1 = require("./models/collection1");
const { mutileMongooseToObject } = require("../../util/mongoose");

class MyController {
  storedCourses(req, res, next) {
    Promise.all([
      collection1.find({}),
      collection1.countWithDeleted({ deleted: true }),
    ])
      .then(([courses, counter]) => {
        res.render("my/stored-courses", {
          courses: mutileMongooseToObject(courses),
          counter,
        });
      })
      .catch(next);
  }

  trashCourses(req, res, next) {
    collection1
      .findWithDeleted({ deleted: true })
      .then((courses) => {
        res.render("my/trash-courses", {
          courses: mutileMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MyController();
