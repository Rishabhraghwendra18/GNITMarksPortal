const app=require('../index');

const PORT = 5000;
app.listen(PORT,()=>{app.client.connect();console.log(`Server Listening at ${PORT}`)});