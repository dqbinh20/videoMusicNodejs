const express = require("express");
const router = express.Router();
const CoursesController = require("../app/controllers/CoursesController");

router.get("/create", CoursesController.create);
router.post("/store", CoursesController.store);
router.get("/:id/edit", CoursesController.edit);
router.get("/:id/restore", CoursesController.restore);
router.delete("/:id", CoursesController.detroy);
router.put("/:id", CoursesController.update);
router.get("/:slug", CoursesController.show);
module.exports = router;
