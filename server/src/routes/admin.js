const express=require('express');
const sha256 = require('js-sha256').sha256;
const router=express.Router();
const client=require('../databaseAndConnectors/database/postgresqlIntialization');
const authRole =require('../middlewares/permissonMiddlewares/authRole');

router.get("/",authRole("ADMIN"),(req,res)=>{
      const isAdmin={isAdmin:true};
      res.json(isAdmin)
});
router.get("/dashboard",authRole("ADMIN"),(req,res)=>{
      res.status(200);
      res.send("hello dashboard")
})
router.post("/adduser",authRole("ADMIN"),(req,res)=>{
      const user=req.body.user;
      user['password']=sha256(user.password);
      const query=`INSERT INTO users(ID,role,password)VALUES('${user.id}','${user.role}','${user.password}');`;
      client.query(query,(postgressError,postgresResponse)=>{
            if(postgressError){
                  res.status(500);
                  res.json({"error":true,
                  "description":postgressError.detail});
                  client.end();
                  return;
            }
            client.end();
            res.json({"error":false})
            res.status(200);
            return;
      });
})
module.exports=router;