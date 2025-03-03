const express=require("express");
const router=express.Router();
const {handleUserSignUp,handleUserlogin}=require("../controllers/user_cont.js");

router.post("/",handleUserSignUp);
router.post("/login",handleUserlogin);
module.exports=router;