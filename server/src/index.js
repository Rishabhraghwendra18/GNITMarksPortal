const express = require('express');
const app=express();
// const data =require('./databaseAndConnectors/database/data');
const client=require("./databaseAndConnectors/database/postgresqlIntialization");
const admin=require('./routes/admin');
const userAuthentication =require('./middlewares/authenticationMiddlewares/userAuthentication');

// const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(userAuthentication);
app.get('/',(req,res)=>{
      res.status(200);
      res.json(data);
})
app.use("/admin",admin);
app.client=client;
// app.listen(PORT,()=>console.log(`Server Listening at ${PORT}`))
module.exports=app;