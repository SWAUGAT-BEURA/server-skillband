const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var otpSchema = new Schema({
    expire_at: {type: Date, default: Date.now, expires: 300},
    email: {
        type: String,
        required: true,
        unique: true
    },
    OTP: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
})

otpSchema.index({expire_at: 1 },{expireAfterSeconds: 0});

var OTPS = mongoose.model('OTPS',otpSchema);

module.exports =  OTPS;