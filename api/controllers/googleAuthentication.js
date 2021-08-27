const User=require('../models/googleUser');
const jwt=require('jsonwebtoken');
const {OAuth2Client}=require('google-auth-library');
const { response } = require('express');
const client=new OAuth2Client("121354643505-vjs7l35rdv2bsdh3q0bl9g9ktron7gu2lk.apps.googleusercontent.com");
const secretkey="skillband2021";

exports.googlelogin=(req,res)=>{
    const {tokenId}=req.body;
    client.verifyIdToken({idToken: tokenId,audience:"21354666-vjs7l35rdv2bh3q0bl9g9kdmfmdnbftron7gu2lk.apps.googleusercontent.com"}).then(response =>{
        const {email_verified,name,email,picture}=response.payload;
        // console.log(response.payload);
        if(email_verified){
            User.findOne({email}).exec((err,user)=>{
                if(err){
                    res.status(400).json({
                        message:"Something went wrong...."                    
                    })
                }else{
                    if(user){
                        const token=jwt.sign({_id:user._id},secretkey,{expiresIn:'7d'});
                        const {_id,name,email,picture,email_verified}=user;
                        res.json({
                            message:"found the user",
                            token,
                            user:{_id,name,email,picture}
                        })
                    }else{
                        let newUser=new User({name,email,picture,email_verified});                                
                        newUser.save(function (err,result) {
                            if(err){
                                res.status(400).json({
                                    message:"Something went wrong...."                           
                                }) 
                            }

                            if(result){
                                res.json({
                                    message:"user not found"
                                })
                            }	
                            
                        })                       
                        
                    }
                }
            })
            
        }
    })
    console.log();
}

exports.googlesignup=(req,res)=>{
    const {tokenId}=req.body;
    client.verifyIdToken({idToken: tokenId,audience:"133545464-vjs7l35rdv2bhdmb3q0bl9g9ktron7gu2lk.apps.googleusercontent.com"}).then(response =>{
        const {email_verified,name,email,picture}=response.payload;
        // console.log(response.payload);
        if(email_verified){
            User.findOne({email}).exec((err,user)=>{
                if(err){
                    res.status(400).json({
                        message:"Something went wrong...."                    
                    })
                }else{
                    if(user){
                        const token=jwt.sign({_id:user._id},secretkey,{expiresIn:'7d'});
                        res.json({
                            message:"User Already Exists",
                        })
                    }else{
                              
                        let newUser=new User({name,email,picture,email_verified});                                
                        newUser.save(function (err,result) {
                            if(err){
                                res.status(400).json({
                                    message:"Something went wrong...."                           
                                }) 
                            }

                            if(result){
                                const token=jwt.sign({_id: result._id},secretkey,{expiresIn:'7d'});
                                const {_id,name,email,email_verified,picture}=newUser;
                                res.json({
                                    message:"user registered succesfully",
                                    token,
                                    user:{_id,name,email,picture,email_verified}
                                })
                            }	
                            
                        })             
                        
                    }
                }
            })
            
        }
    })
    console.log();
}