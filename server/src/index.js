const express = require('express');
const app=express();
const client=require("./database/postgresqlIntialization");
const userAuthentication =require("./middlewares/authenticationMiddlewares/userAuthentication");
const admin=require("./routes/admin");
const teacher=require("./routes/teacher");
const student=require("./routes/student");

// const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(userAuthentication);
app.get('/',(req,res)=>{
      res.status(200);
      res.json(data);
})
app.use("/admin",admin);
app.use("/teacher",teacher);
app.use("/student",student);
app.client=client;
// app.listen(PORT,()=>console.log(`Server Listening at ${PORT}`))
module.exports=app;