const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {
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

var Categories = mongoose.model('Category',categorySchema);

module.exports =  Categories;