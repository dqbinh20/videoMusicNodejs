const collection1 = require("./models/collection1");
const { mutileMongooseToObject } = require("../../util/mongoose");

class SiteController {
  async home(req, res, next) {
    collection1
      .find()
      .then((documents) => {
        res.render("home", { documents: mutileMongooseToObject(documents) });
      })
      .catch(next);
  }

  login(req, res) {
    res.render("login");
  }

  checkLogin(req, res) {
    res.send(req.body);
  }
}
module.exports = new SiteController();
