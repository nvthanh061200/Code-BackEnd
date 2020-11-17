const express=require('express');
const router=express.Router();

const newsController=require('../app/controller/NewsController');

router.get('/home',newsController.home);//render home
router.get('/news',newsController.news);//
module.exports=router;