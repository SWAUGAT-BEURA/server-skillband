// Import Models
const Courses = require("../models/courses")

exports.createSection = (req, res) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if(course) {
            course.sections.push({
                title: req.body.title
            })
            course.save()
            .then((course) => {
                Courses.findById(req.params.courseId)
                .then((course) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(course);
                })
                .catch((err) => {
                    res.json(err)
                })
            })
            .catch((err) => {
                res.json(err)
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

exports.getAllSection = (req, res) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if(course) {
            res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(course.sections);
        } else {
            res.json({
                msg: "wasnt able to find the given course"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}
exports.getSingleSection = (req, res) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if (course != null && course.sections.id(req.params.sectionId) != null) {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(course.sections.id(req.params.sectionId));
		} else if(course == null){
            res.json({
                msg: "wasnt able to find the given course"
            })
        } else {
            res.json({
                msg: "Wasnt able to find given section"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

exports.updateSection = (req, res) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if(course && course.sections.id(req.params.sectionId)) {
            if(req.body.title) {
                course.sections.id(req.params.sectionId).title = req.body.title
            }
            course.save()
            .then((course) => {
                Courses.findById(req.params.courseId)
                .then((course) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(course);
                })
            })
        }
        else if(course == null) {
            res.json({
                msg: "Wasnt able to find the course"
            })
        }
        else {
            res.json({
                msg: "Wasnt able to find the section"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}


exports.deleteAllSections =(req, res) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if(course) {
            for(var i = (course.sections.length -1); i>=0; i--) {
				course.sections.id(course.sections[i]._id).remove();
			}
            course.save()
			.then((course) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(course);
			})
            .catch((err) => {
                res.json(err)
            })
        }
        else if(course == null) {
            re.json({
                msg: "wasnt able to find the course"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}
exports.deleteSingleSection =(req, res) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if(course && course.sections.id(req.params.sectionId)) {
            course.sections.id(req.params.sectionId).remove()
            course.save()
            .then((course) => {
                Courses.findById(req.params.courseId)
                .then((course) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(course);
                })
                .catch((err) => {
                    res.json(err)
                })
            })
            .catch((err) => {
                res.json(err)
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}