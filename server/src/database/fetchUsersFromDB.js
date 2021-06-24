const client=require("./postgresqlIntialization");
const sha256 = require("js-sha256").sha256;
function selectAllUsers(){
      return "hello";
}
function addUser(user){
 return new Promise((resolve,reject)=>{
      user['password']=sha256(user.password);
      const query=`INSERT INTO users(ID,role,password)VALUES('${user.id}','${user.role}','${user.password}');`;
      client.query(query,(postgressError,postgresResponse)=>{
            if(postgressError){
                  console.log("post: ",postgressError.detail);
                  reject({error:true,
                  status:500,
                  description:postgressError.detail})
                  return;
            }
            resolve({
                  error:false,
                  status:200
            });
})
})
};
module.exports={
      selectAllUsers,
      addUser
};