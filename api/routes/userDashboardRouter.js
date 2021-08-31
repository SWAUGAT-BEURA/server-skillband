const express=require('express');
const router=express.Router();
const dashboardController=require('../controllers/dashboardControllers');

//my course section
router.get("/mylearnings/:userid",dashboardController.mylearnings)

router.get("/myCompletedCourses/:userid",dashboardController.myCompletedCourses)

router.post('/addmycourse/:id',dashboardController.addmycourse)

router.delete('/unEnrollCourse/:id',dashboardController.unEnrollCourse)

//my favourites section

router.post('/addToFavourites/:id',dashboardController.addtofavourites)

router.get('/getMyFavourites/:userid',dashboardController.getMyfavourites)

router.delete('/removeFavourites/:id',dashboardController.removeFavourites)


//my notes section
router.get("/myNotes/:userid",dashboardController.getMyNotes)

router.post('/createNotes/:id',dashboardController.createnote)

router.put("/updateNotes/:id",dashboardController.updatenotes)

router.delete('/deletenotes/:id',dashboardController.deleteNotes)

module.exports=router;