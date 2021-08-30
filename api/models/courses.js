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
    },
    sections: [sectionSchema]
}, {
    timestamps: true
})

var Courses = mongoose.model('Course',courseSchema);

module.exports =  Courses;