const freeCallModel=require('../models/bookFreeCall');
const cartModel=require('../models/cart')

exports.addfreeuser=async(req,res)=>{
    const freeCall={
        name:req.body.name,
        email:req.body.email,     
        phone:req.body.phone
    } 
      
    try{        
        const freeUser=new freeCallModel(freeCall);
        await freeUser.save()
        res.status(200).json({
            message:"Your details have been submitted successfully, our team will get back to you"
        })

    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error: err
        })
        
    }
}

exports.addtoCart=async(req,res)=>{
    const cart={
        courseid:req.body.courseid,
        userid:req.body.userid 
    }       
    try{        
        const cart1=new cartModel(cart);
        await cart1.save()
        res.status(200).json({
            message:"Course added to your cart"
        })

    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error: err
        })
        
    }
}

exports.deleteCart=async(req,res)=>{
    const id=req.params.id;
    try{
        const cartdelete=await cartModel.findByIdAndDelete(id);
        if(cartdelete==null){
            res.status(400).json({
            message:"cart couldn't be deleted or not found"
        })
        }else{
            res.status(200).json({
            message:"cart deleted sucessfully",
        })
    }    
    }catch{
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
}