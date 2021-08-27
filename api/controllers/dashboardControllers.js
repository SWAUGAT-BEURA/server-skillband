const courseModel=require('../models/myCourses');
const completedCourseModel=require('../models/completedCourses');
const notesModel=require('../models/notes');


//api's for user courses section
exports.mylearnings=async(req,res)=>{
    try{
        let courses=await courseModel.find({userid:req.params.userid}).populate('userid');
        if(!courses){
            courses=[]
        }
        res.status(200).json({
            message:"courses fetched successfully",
            coursesData:courses
        })
    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err
        })

    }    
}


exports.myCompletedCourses=async(req,res)=>{
    try{
        let courses=await completedCourseModel.find({userid:req.params.userid}).populate('userid');
        if(!courses){
            courses=[]
        }
        res.status(200).json({
            message:"courses fetched successfully",
            coursesData:courses
        })
    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err
        })

    }    
}


exports.addmycourse=async(req,res)=>{
    const course={
        userid:req.body.userid,
        category_id:req.body.category_id,        
        name:req.body.name,
        description:req.body.description,
        thumbnail:req.body.thumbnail,
        difficulty:req.body.difficulty,
        time:req.body.time
    } 
      
    try{        
        const course1=new courseModel(course);
        await course1.save()
        res.status(200).json({
        message:"course added successfully",
        courseData:course1
    })

    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error: err
        })
        
    }
}

//api for notes section
exports.getMyNotes=async(req,res)=>{
    
    notesModel.find({userid: req.params.userid})
    .then((notes) => {
        console.log(notes);
        if(notes) {
            res.statusCode = 200;
            res.json(notes)
        } else {
            res.json({
                mwssage: "No notes found"
            })
        }
    })
    .catch((err) => {
        res.json(err)
    })
}


exports.createnote=async(req,res)=>{
    const note={
        userid:req.body.userid,
        title:req.body.title,
        description:req.body.description
    }       
    try{        
        const notes=new notesModel(note);
        await notes.save()
        res.status(200).json({
        message:"notes added successfully",
        notesData:notes
    })

    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error: err
        })
        
    }
}


exports.updatenotes=async(req,res)=>{
    const note={
        userid:req.body.userid,
        title:req.body.title,
        description:req.body.description
    } 
    try{
        const id=req.params.id;
        const updatednote=await notesModel.findByIdAndUpdate(id,{$set:note});
        if(updatednote==null){
            res.status(400).json({
            message:"notes couldnt be updated or id not found"
        })
        }else{
            res.status(200).json({
            message:"updated sucessfully",
            notesData:updatednote
            })
        }
    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    } 
}

exports.deleteNotes=async(req,res)=>{
    const id=req.params.id;
    try{
        const deleteNote=await notesModel.findByIdAndDelete(id);
        if(deleteNote==null){
            res.status(400).json({
            message:"Contact couldnt be deleted or id not found"
        })
        }else{
            res.status(200).json({
            message:"contact deleted sucessfully",
        })
        }    
    }catch{
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
}

