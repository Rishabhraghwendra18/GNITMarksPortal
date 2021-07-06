const express = require("express");
const router = express.Router();
const authRole = require("../middlewares/permissonMiddlewares/authRole");
const {selectAllStudents}=require("../database/fetchUsersFromDB");

router.get("/dashboard",authRole("teacher"),(req,res)=>{
      selectAllStudents(req.user.semester)
      .then(e=>res.json(e))
      .catch(e=>res.json(e));
})

module.exports=router;