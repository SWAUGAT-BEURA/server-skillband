// Import Models
const Courses = require("../models/courses")

exports.getAllVideos = (req, res) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if(course) {
            res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(course.videos);
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
exports.getSingleVideo = (req, res) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if (course != null && course.videos.id(req.params.videoId) != null) {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(course.videos.id(req.params.videoId));
		} else if(course == null){
            res.json({
                msg: "wasnt able to find the given course"
            })
        } else {
            res.json({
                msg: "Wasnt able to find given video"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}


exports.createVideo = (req, res) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if(course) {
            course.videos.push({
                title: req.body.title,
                videoLink: req.body.videoLink,
                description: req.body.description
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


exports.updateVideo = (req, res) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if(course && course.videos.id(req.params.videoId)) {
            if(req.body.title) {
                course.videos.id(req.params.videoId).title = req.body.title
            }
            if(req.body.videoLink) {
                course.videos.id(req.params.videoId).videoLink = req.body.videoLink
            }
            if(req.body.description){
                course.videos.id(req.params.videoId).videoLink = req.body.description
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
                msg: "Wasnt able to find the video"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}


exports.deleteAllVideo =(req, res) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if(course) {
            for(var i = (course.videos.length -1); i>=0; i--) {
				course.videos.id(course.videos[i]._id).remove();
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
exports.deleteSingleVideo =(req, res) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if(course && course.videos.id(req.params.videoId)) {
            course.videos.id(req.params.videoId).remove()
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