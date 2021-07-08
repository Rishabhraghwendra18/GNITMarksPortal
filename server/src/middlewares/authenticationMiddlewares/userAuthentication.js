const client = require("../../database/postgresqlIntialization");
const sha256 = require('js-sha256').sha256;
function searchUserInDatabase(user) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM users LEFT JOIN semester_lists ON users.id=semester_lists.id WHERE users.id='${user.body.id}';`;
    client.query(query, (postgressError, postgresResponse) => {
      const FIRST_RECORD_INDEX = 0;
      try {
        userPassowrdInSHA256=sha256(user.body.password);
      } catch {
        reject({description:"Please enter your password in input field"});
      }
      if (postgressError) {
        reject({ description: postgressError.detail });
      } 
      else if(!postgresResponse.rows.length){
        reject({description:"No such user . Please check your ID"});
      }
      else if (
        userPassowrdInSHA256 !== postgresResponse.rows[FIRST_RECORD_INDEX].password
      ) {
        reject({ description: "incorrect password" });
      }
      const userData={...postgresResponse.rows[FIRST_RECORD_INDEX]};
      delete userData.password;
      resolve(userData);
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
      res.status(203);
      res.json({ isUser: false, desc: e.description });
      return;
    });
}
module.exports = userAuthentication;
