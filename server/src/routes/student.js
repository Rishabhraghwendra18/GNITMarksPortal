const express = require("express");
const router = express.Router();
const authRole = require("../middlewares/permissonMiddlewares/authRole");
const {getStudent}=require("../database/fetchUsersFromDB");

router.get("/dashboard",authRole("student"),(req,res)=>{
      getStudent(req.user)
      .then(e=>res.json(e))
      .catch(e=>res.json(e));
})

module.exports=router;