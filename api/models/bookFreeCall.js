const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var freeCallSchema = new Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

var myNotes = mongoose.model('freeUser',freeCallSchema);

module.exports =  myNotes;