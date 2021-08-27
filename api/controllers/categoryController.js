// Import Models
const Categories = require('../models/categories')
const Courses = require('../models/courses')


exports.getAllCategory = (req, res) => {
    Categories.find({})
    .then((categories) => {
        if(categories) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(categories)
        }
    })
    .catch((err) => {
        res.json(err)
    })
}
exports.getsingleCategory = (req, res) => {
    Categories.findOne({_id: req.params.id})
    .then((category) => {
        if(category) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(category)
        } else {
            res.json({
                msg: "Found Nothing!"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}


exports.createCategory = (req, res) => {
    Categories.create({
        name: req.body.name,
        description: req.body.description
    })
    .then((category) => {
        if(category == null) {
            res.json({
                msg:"unable to create"
            })
        } else if(category) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(category)
        }
    })
    .catch((err) => {
        res.json(err)
    })
}


exports.updateCategory = (req, res) => {
    Categories.findByIdAndUpdate(req.params.id, {
        $set: {name: req.body.name, description: req.body.description}
        }, {new: true}
    )
    .then((category) => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.json(category)
    })
    .catch((err) => {
        res.json(err)
    })
}


exports.deleteAllCategory = async (req, res) => {
    await Courses.remove({})
    await Categories.remove({})
    .then((category) => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.json({
            msg: "Successfully deleted!"
        })
    })
    .catch((err) => {
        res.json(err)
    })
}
exports.deleteSingleCategory = async (req, res) => {
    await Courses.deleteMany({category_id: req.params.id})
    await Categories.findByIdAndDelete(req.params.id)
    .then((category) => {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.json({
            msg: "Successfully deleted!"
        })
    })
    .catch((err) => {
        res.json(err)
    })
}