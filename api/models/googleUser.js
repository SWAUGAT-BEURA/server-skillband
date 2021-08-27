const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    email_verified:{
        type:Boolean,
        required:true
    },
    picture:{
        type:String,
    }
    
})

module.exports=mongoose.model('googleuser',UserSchema);