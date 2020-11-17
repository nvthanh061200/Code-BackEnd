const express=require('express');
const router=express.Router();

const siteController=require('../app/controller/SiteController');

router.get('/:lug',siteController.linhtinh);
module.exports=router;