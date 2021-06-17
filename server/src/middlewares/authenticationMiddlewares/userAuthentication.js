const client = require("../../databaseAndConnectors/database/postgresqlIntialization");

function searchUserInDatabase(user) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM users WHERE id='${user.body.id}' LIMIT 1;`;
    client.query(query, (postgressError, postgresResponse) => {
      const FIRST_RECORD_INDEX = 0;
      if (postgressError) {
        reject({ description: postgressError.detail });
        return;
      } 
      else if(!postgresResponse.rows.length){
        reject({description:"No such user . Please check your ID"});
        return;
      }
      else if (
        user.body.password !== postgresResponse.rows[FIRST_RECORD_INDEX].password
      ) {
        reject({ description: "incorrect password" });
        return;
      }
      resolve(postgresResponse.rows[FIRST_RECORD_INDEX]);
    });
  });
}

function userAuthentication(req, res, next) {
  searchUserInDatabase(req)
    .then((e) => {
      req.user = e;
      next();
    })
    .catch((e) => {
      console.log("catch hitted")
      res.status(203);
      res.json({ isUser: false, desc: e.description });
      return;
    });
}
module.exports = userAuthentication;
