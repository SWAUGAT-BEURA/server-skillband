const express=require('express');
const router=express.Router();
const dashboardController=require('../controllers/dashboardControllers');

//my course section
router.get("/mylearnings/:id",dashboardController.mylearnings)

router.get("/myCompletedCourses/:id",dashboardController.myCompletedCourses)

router.post('/addmycourse/:id',dashboardController.addmycourse)


//my notes section
router.get("/myNotes/:userid",dashboardController.getMyNotes)

router.post('/createNotes/:id',dashboardController.createnote)

router.put("/updateNotes/:id",dashboardController.updatenotes)

router.delete('/deletenotes/:id',dashboardController.deleteNotes)

module.exports=router;