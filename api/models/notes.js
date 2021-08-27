const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var noteSchema = new Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

var myNotes = mongoose.model('mynotes',noteSchema);

module.exports =  myNotes;