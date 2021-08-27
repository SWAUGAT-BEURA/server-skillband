const User=require('../models/User');
const bcrypt=require('bcryptjs');

exports.userRegister = async(req,res) => {
    try{
        const hashedPass=await bcrypt.hash(req.body.password,10);
        const newUser=new User({
            username: req.body.username,
            email: req.body.email,
            password:hashedPass,
            phone:req.body.phone
        });
        const user=await newUser.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
}