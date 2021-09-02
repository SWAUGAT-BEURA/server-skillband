const express=require('express');
const router=express.Router();
const dashboardController=require('../controllers/dashboardControllers');

//my course section
router.get("/mylearnings/:userid",dashboardController.mylearnings)

router.get("/mylearningsbyid/:id",dashboardController.mylearningsid)

router.post('/addmycourse/:courseid',dashboardController.addmycourse)

router.delete('/unEnrollCourse/:id',dashboardController.unEnrollCourse)

//course completion section

router.get("/myCompletedCourses/:userid",dashboardController.myCompletedCourses)

router.get("/myCompletedCoursesbyId/:id",dashboardController.mycompletedcoursesid)

router.post("/CourseCompletion/:courseid",dashboardController.addtocompletionCourses)

router.delete('/deleteCourseCompletion/:id',dashboardController.deleteCourseCompletion)

//my favourites section

router.post('/addToFavourites/:courseid',dashboardController.addtofavourites)

router.get('/getMyFavourites/:userid',dashboardController.getMyfavourites)

router.get('/getMyFavouritesbyid/:id',dashboardController.myfavouritecourseid)

router.delete('/removeFavourites/:id',dashboardController.removeFavourites)


//my notes section
router.get("/myNotes/:userid",dashboardController.getMyNotes)

router.post('/createNotes/:userid',dashboardController.createnote)

router.put("/updateNotes/:id",dashboardController.updatenotes)

router.delete('/deletenotes/:id',dashboardController.deleteNotes)

module.exports=router;