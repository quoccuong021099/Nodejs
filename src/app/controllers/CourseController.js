const Course = require("../models/Course");
const { mongoosesToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    // req.query.name;
    // req.body.name;
    // req.params.slug;
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: mongoosesToObject(course) })
      )
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
    const course = new Course(formData); // new model
    course
      .save()
      .then(() => res.redirect("/").catch((err) => console.log(err)));
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongoosesToObject(course),
        })
      )
      .catch(next);
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then((course) => res.redirect("/me/stored/courses"))
      .catch(next);
  }
}
module.exports = new CourseController();
