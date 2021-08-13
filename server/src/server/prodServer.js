const app=require('../index');

const PORT = process.env.PORT;
app.listen(PORT,()=>{app.client.connect();console.log(`Server Listening at ${PORT}`)});