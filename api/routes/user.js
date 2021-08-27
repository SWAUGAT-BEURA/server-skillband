const userController = require('../controllers/userController');
const userRouter = require("express").Router();

userRouter.route("/:id")
.get(userController.userInfo)
.put(userController.userInfoUpdate)
.delete(userController.userDelete);

module.exports = userRouter;