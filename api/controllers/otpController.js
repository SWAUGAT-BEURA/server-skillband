const User=require('../models/User');
const OTPS = require("../models/otps");
const transporter = require("../EmailAuthenticate");
const random = require("random");

exports.userOtpSender = (req,res)=>{
    var otp = random.int((min = 100000), (max = 999999));

    var mailOptions = {
        from: 'skillband303@gmail.com',
        to: req.body.email,
        subject: 'OTP for Skillband Email Verification',
        text: 'Hi to verify your Email, use ' + otp + ' this. Please dont share this OTP with anyone else.'
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
        } else if(info != null) {

            OTPS.findOneAndRemove({email: req.body.email})
            .then(() => {
                OTPS.create({
                    email: req.body.email,
                    OTP: otp
                })
                .then((foundOtp) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.statusCode = 200;
                    res.json({
                        message: "Check your email for OTP"
                    });
                    return;
                })
                .catch((err) => {
                    res.json(err);
                })
            })
            .catch((err)=> {
                res.json({
                    message: "There was some issue with otp"
                })
            })    
        }
    })
}

exports.userOtpVerification = (req, res) => {
    if(req.body.OTP == null || req.body.email == null) {
        res.json({
            message: "NULL OTP or Email"
        })
        return;
    }
    OTPS.findOne({email: req.body.email}, (err, otp) => {
        if(err) {
            res.json(err);
        } else if(otp != null) {
            if(req.body.OTP == otp.OTP) {
                User.findOneAndUpdate({email: req.body.email}, {
                    $set: {"verified" : true}
                }, {new: true})
                .then((user) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({
                        message: "Successfully Verified"
                    });
                })
                .catch((err) =>{
                    res.json(err);
                });
            } else {
                res.json({
                    message: "Wrong OTP!!"
                })
            }
        }
    })
}