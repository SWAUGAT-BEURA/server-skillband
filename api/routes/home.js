const express=require('express');
const router=express.Router();
const homeController=require('../controllers/homeController');

router.post('/freeService',homeController.addfreeuser)

module.exports=router;