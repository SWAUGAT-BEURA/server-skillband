const express=require('express');
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const otpController = require('../controllers/otpController');



const authRouter = express.Router();

//register
authRouter.route("/register")
.post(registerController.userRegister);

//login
authRouter.route("/login")
.post(loginController.userLogin);

// OTP Generation Route:-  "/sendOTP"
authRouter.route("/sendOTP")
.post(otpController.userOtpSender);

// OTP Verification Route:- "/verifyOTP"
authRouter.route("/verifyOTP")
.post(otpController.userOtpVerification);


module.exports = authRouter;