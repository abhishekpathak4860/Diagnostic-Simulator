const express=require('express');
const router=express.Router();

const getquestions=require("../controllers/products");

router.route('/').get(getquestions);

module.exports=router;