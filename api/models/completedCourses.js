const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var videoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    description: [String]
})

var courseSchema = new Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    courseid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'course'
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String
    },
    difficulty: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

var myCourses = mongoose.model('completedCourses',courseSchema);

module.exports =  myCourses;