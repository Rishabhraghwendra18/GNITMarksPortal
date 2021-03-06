const express = require("express");
const router = express.Router();
const authRole = require("../middlewares/permissonMiddlewares/authRole");
const { addUser,selectAllUsers,promoteStudentToNextSemester } = require("../database/fetchUsersFromDB");

router.post("/dashboard", authRole("ADMIN"), (req, res) => {
  if(!Object.keys(req.query).length && req.query.constructor===Object){
    res.status(400);
    res.json({error:"Missing query parameter"});
    return;
  }
  const semester=req.query.semester;
  selectAllUsers(semester)
  .then(e=>{
  res.status(200);
  res.json(e);
  })
  .catch(e=>{
    res.status(500);
    res.json(e)
  })
});
router.post("/adduser", authRole("ADMIN"), (req, res) => {
  const user = req.body.user;
  addUser(user)
    .then((e) => {
      res.status(e.status);
      res.json(e.error);
    })
    .catch((e) => {
      res.status(e.status);
      res.json({
        error: true,
        description: e.description,
      });
    });
});
router.post("/promotestudent",authRole("ADMIN"),(req,res)=>{
  promoteStudentToNextSemester(req.body.user)
  .then(()=>res.json({error:false}))
  .catch(e=>{
    res.status(e.status);
    res.json(e);
  })
})

module.exports = router;
