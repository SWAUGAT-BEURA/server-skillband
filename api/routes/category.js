const categoryRouter = require("express").Router();
const categoryController = require('../controllers/categoryController')

categoryRouter.route('/')
.get(categoryController.getAllCategory)
.post(categoryController.createCategory)
.put((req, res) => {
    res.statusCode = 403;
	res.end('PUT operation not supported');
})
.delete(categoryController.deleteAllCategory)

categoryRouter.route('/:id')
.get(categoryController.getsingleCategory)
.post((req, res) => {
    res.statusCode = 403;
	res.end('POST operation not supported');
})
.put(categoryController.updateCategory)
.delete(categoryController.deleteSingleCategory)

categoryRouter.route('/:id/courses')
.get(categoryController.getAllCoursesOfCategory)

module.exports = categoryRouter;