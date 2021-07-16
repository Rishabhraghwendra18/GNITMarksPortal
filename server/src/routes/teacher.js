const express = require("express");
const router = express.Router();
const authRole = require("../middlewares/permissonMiddlewares/authRole");
const {selectAllStudents,uploadStudentMarks}=require("../database/fetchUsersFromDB");

router.post("/dashboard",authRole("teacher"),(req,res)=>{
      selectAllStudents(req.user.semester)
      .then(e=>res.json(e))
      .catch(e=>res.json(e));
});
router.put("/uploadmarks",authRole("teacher"),(req,res)=>{
      uploadStudentMarks(req.user.id,req.body.student.id,req.body.student.marks)
      .then(e=>res.json({status:200}))
      .catch(e=>res.json(e));
});

module.exports=router;