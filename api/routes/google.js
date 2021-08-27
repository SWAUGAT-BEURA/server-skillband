const express=require("express");
const router=express.Router();
const googleController=require('../controllers/googleAuthentication');

router.post('/googlelogin',googleController.googlelogin);
router.post('/googlesignup',googleController.googlesignup);
module.exports=router;