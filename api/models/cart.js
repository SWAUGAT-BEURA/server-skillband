const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var cartSchema = new Schema({
    courseid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'course'
    },
    userid: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }

}, {
    timestamps: true
})

var myCart = mongoose.model('cart',cartSchema);

module.exports = myCart ;
;