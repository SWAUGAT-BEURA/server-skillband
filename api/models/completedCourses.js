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

var sectionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    videos: [videoSchema]
    
})

var courseSchema = new Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        reuired:true
    },
    courseid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'course',
        reuired:true
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
        type: String
    },
    thumbnail: {
        type: String
    },
    difficulty: {
        type: String
    },
    time: {
        type: String
    },
    sections: [sectionSchema]

})

var completedCourseSchema=new Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    completedcourses: courseSchema

})


var myCourses = mongoose.model('completedCourses',completedCourseSchema);

module.exports =  myCourses;