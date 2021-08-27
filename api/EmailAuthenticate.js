const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skillband303@gmail.com',
        pass: 'skillband@123'
    }
});

module.exports = transporter;