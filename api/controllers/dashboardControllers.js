const courseModel=require('../models/courses');
const completedCourseModel=require('../models/completedCourses');
const notesModel=require('../models/notes');
const myFavCourses=require('../models/myFavCourses');
const myCoursesModel=require('../models/myCourses');


//api's for user courses section
exports.mylearningsid=async(req,res)=>{
    const id= req.params.id;
    try{
        const course=await myCoursesModel.findById(id);
        if(course){
            res.status(200).json({
                message:"course fetched successfully",
                course:contact
            })
        }else{
            res.status(400).json({
                message:"courses not found"
            })
        }

    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
}

exports.mylearnings = (req, res) => {
    myCoursesModel.find({userid: req.params.userid})
    .then((courses) => {
        if(courses) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(courses)
        } else {
            res.json({
                message: "Wasn't able to find any of the courses that you have enrolled"
            })
        }
    })
    .catch((err) => {
        res.json({
            message: "Something went wrong"
        })
        
    })
}

exports.addmycourse=async(req,res)=>{
    courseModel.findOne({_id: req.params.courseid})
    .then((course) => {
        console.log(course);
        if(!course) {
            res.json({
                message:"no course found"
            })
            
        }else {
            const mycourse={
                userid:req.body.userid,
                mycoursedata:course
            }
            console.log(course);
            try{
                const mycourse1=new myCoursesModel(mycourse);
                mycourse1.save()
                res.status(200).json({
                    message:"course added to your learnings",
                    mycourseData:mycourse1
                })
            }
            catch(err){
                res.status(500).json({
                    message:"something went wrong",
                    error: err
                })           
            }
        }            
        
    })
}

exports.unEnrollCourse=async(req,res)=>{
    const id=req.params.id;
    try{
        const unenrollcourse=await myCoursesModel.findByIdAndDelete(id);
        if(unenrollcourse==null){
            res.status(400).json({
            message:"Course couldn't be deleted or not found"
        })
        }else{
            res.status(200).json({
            message:"Course unenrolled sucessfully",
        })
    }    
    }catch{
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
}

//completed course section

exports.mycompletedcoursesid=async(req,res)=>{
    const id= req.params.id;
    try{
        const course=await completedCourseModel.findById(id);
        if(course){
            res.status(200).json({
                message:"course fetched successfully",
                course: course
            })
        }else{
            res.status(400).json({
                message:"courses not found"
            })
        }

    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
}

exports.myCompletedCourses=async(req,res)=>{
    completedCourseModel.find({userid: req.params.userid})
    .then((courses) => {
        if(courses) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(courses)
        } else {
            res.json({
                message: "Wasn't able to find any of the courses that you completed"
            })
        }
    })
    .catch((err) => {
        res.json({
            message: "Something went wrong"
        })
        
    }) 
}

exports.addtocompletionCourses=async(req,res)=>{
    courseModel.findOne({_id: req.params.courseid})
    .then((course) => {
        console.log(course);
        if(!course) {
            res.json({
                message:"no course found"
            })
            
        }else {
            const mycompletedcourse={
                userid:req.body.userid,
                completedcourses:course
            }
            console.log(course);
            try{
                const mycourse1=new completedCourseModel(mycompletedcourse);
                mycourse1.save()
                res.status(200).json({
                    message:"course Completed",
                    completedcourses:mycourse1
                })
            }
            catch(err){
                res.status(500).json({
                    message:"something went wrong",
                    error: err
                })           
            }
        }            
        
    })
    

    
}

exports.deleteCourseCompletion=async(req,res)=>{
    const id=req.params.id;
    try{
        const unenrollcourse=await this.myCompletedCourses.findByIdAndDelete(id);
        if(unenrollcourse==null){
            res.status(400).json({
            message:"Course couldn't be deleted or not found"
        })
        }else{
            res.status(200).json({
            message:"Course removed sucessfully",
        })
    }    
    }catch{
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
}

//favourites section
exports.myfavouritecourseid=async(req,res)=>{
    const id= req.params.id;
    try{
        const course=await myFavCourses.findById(id);
        if(course){
            res.status(200).json({
                message:"course fetched successfully",
                course: course
            })
        }else{
            res.status(400).json({
                message:"courses not found"
            })
        }

    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
}


exports.getMyfavourites=(req,res)=>{
    myFavCourses.find({userid: req.params.userid})
    .then((courses) => {
        if(courses) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.json(courses)
        } else {
            res.json({
                message: "Wasn't able to find any of the courses that you added in favourites"
            })
        }
    })
    .catch((err) => {
        res.json({
            message: "Something went wrong"
        })
        
    }) 
}

exports.addtofavourites=async(req,res)=>{
    courseModel.findOne({_id: req.params.courseid})
    .then((course) => {
        console.log(course);
        if(!course) {
            res.json({
                message:"no course found"
            })
            
        }else {
            const myfavcourse={
                userid:req.body.userid,
                favcourses:course
            }
            console.log(course);
            try{
                const mycourse1=new myFavCourses(myfavcourse);
                mycourse1.save()
                res.status(200).json({
                    message:"course added to favourites",
                    favcourses:mycourse1
                })
            }
            catch(err){
                res.status(500).json({
                    message:"something went wrong",
                    error: err
                })           
            }
        }            
        
    })   

    
}



exports.removeFavourites=async(req,res)=>{
    const id=req.params.id;
    try{
        const deletefav=await myFavCourses.findByIdAndDelete(id);
        if(deletefav==null){
            res.status(400).json({
            message:"Course couldn't be removed or not found"
        })
        }else{
            res.status(200).json({
            message:"removed sucessfully",
        })
        }    
    }catch{
        res.status(500).json({
            message:"something went wrong",
            error:err
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
                message: "No notes found"
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
            message:"Note couldnt be deleted or  not found"
        })
        }else{
            res.status(200).json({
            message:"Note deleted sucessfully",
        })
        }    
    }catch{
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
}

