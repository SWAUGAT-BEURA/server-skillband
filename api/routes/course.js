const courseRouter = require("express").Router();

// Import Controllers
const courseController = require('../controllers/courseController')
const videoController = require("../controllers/videoController")


courseRouter.route('/')
.get(courseController.getAllCourses)
.post(courseController.createCourse)
.put((req, res) => {
    res.statusCode = 403;
	res.end('PUT operation not supported');
})
.delete(courseController.deleteAllCourses)


courseRouter.route('/:courseId')
.get(courseController.getSingleCourse)
.post((req, res) => {
    res.statusCode = 403;
	res.end('POST operation not supported');
})
.put(courseController.updateCourse)
.delete(courseController.deleteSingleCourse)


courseRouter.route('/:courseId/videos')
.get(videoController.getAllVideos)
.post(videoController.createVideo)
.put((req, res) => {
    res.statusCode = 403;
	res.end('PUT operation not supported');
})
.delete(videoController.deleteAllVideo)


courseRouter.route('/:courseId/videos/:videoId')
.get(videoController.getSingleVideo)
.post((req, res) => {
    res.statusCode = 403;
	res.end('POST operation not supported');
})
.put(videoController.updateVideo)
.delete(videoController.deleteSingleVideo)


module.exports = courseRouter;