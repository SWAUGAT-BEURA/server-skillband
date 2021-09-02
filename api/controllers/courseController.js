// Import Models
const Courses = require("../models/courses")
const Categories = require("../models/categories")


exports.getAllCourses = (req, res) => {
    Courses.find({})
    .then((courses) => {
        if(courses) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(courses)
        } else {
            res.json({
                msg: "No courses found"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}
exports.getSingleCourse = (req, res) => {
    Courses.findOne({_id: req.params.courseId})
    .then((course) => {
        if(course) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(course)
        } else {
            res.json({
                msg: "No course found"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}


exports.createCourse = (req, res) => {
    Categories.findById(req.body.category_id)
    .then((category) => {
        if(!category) {
            res.json({
                message: "There is no category with " + req.body.category_id + " this id"
            })
        } else {
            Courses.create({
                category_id: req.body.category_id,
                name: req.body.name,
                description: req.body.description,
                difficulty: req.body.difficulty,
                time: req.body.time,
                thumbnail: req.body.thumbnail
            })
            .then((course) => {
                if(course) {
                    res.setHeader('Content-Type', 'application/json');
                    res.statusCode = 200;
                    res.json(course)
                }
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


exports.deleteAllCourses = (req, res) => {
    Courses.remove({})
    .then((resp) =>{
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(resp);
	},(err) => next(err))
	.catch((err) => {
        res.json(err)
    });
}
exports.deleteSingleCourse = (req, res) => {
    Courses.deleteOne({_id: req.params.courseId})
    .then((resp) =>{
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(resp);
	},(err) => next(err))
	.catch((err) => {
        res.json(err)
    });
}


exports.updateCourse = (req, res) => {
    Courses.findByIdAndUpdate(req.params.courseId, {
        $set: {name: req.body.name,
            description: req.body.description,
            difficulty: req.body.difficulty,
            time: req.body.time}
        }, {new: true}
    )
    .then((course) => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.json(course)
    })
    .catch((err) => {
        res.json(err)
    })
}