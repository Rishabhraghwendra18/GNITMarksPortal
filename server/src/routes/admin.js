const express = require("express");
const router = express.Router();
const authRole = require("../middlewares/permissonMiddlewares/authRole");
const { addUser,selectAllUsers } = require("../database/fetchUsersFromDB");

router.post("/dashboard", authRole("ADMIN"), (req, res) => {
  if(!req.query){
    res.status(400);
    res.json({error:"Missing query parameter"});
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

module.exports = router;
