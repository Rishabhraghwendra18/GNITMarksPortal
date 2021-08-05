const app=require('../index');
// const client=require('../databaseAndConnectors/database/postgresqlIntialization');
const PORT = process.env.PORT || 5001;
app.listen(PORT,()=>{app.client.connect();console.log(`Server Listening at ${PORT}`)});