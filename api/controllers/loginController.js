const User=require('../models/User');
const bcrypt=require('bcryptjs');

exports.userLogin = async(req,res)=>{
    try{
        var user = null;
        if(req.body.username != null) {
            user= await User.findOne({username:req.body.username});
        } else if(req.body.email != null) {
            user= await User.findOne({email:req.body.email});
        }
        
        !user && res.status(400).json("Wrong credentials!");

        const validate=await bcrypt.compare(req.body.password,user.password);
        !validate && res.status(400).json("Wrong credentials!");
        if(!user.verified) {
            res.status(401).json("Please verify your email first");
            return;
        }
        const{password,...others}=user._doc;
        res.status(200).json(others);

    }catch(err){
        res.status(500).json(err);
    }
}