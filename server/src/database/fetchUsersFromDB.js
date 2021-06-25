const client = require("./postgresqlIntialization");
const sha256 = require("js-sha256").sha256;
function selectAllStudents() {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM students;";
    client.query(query, (postgressError, postgresResponse) => {
      if (postgressError) {
        console.log("post: ", postgressError.detail);
        reject({
          error: true,
          status: 500,
          description: postgressError.detail,
        });
      }
      resolve(postgresResponse.rows);
    });
  });
}
function selectAllTeachers() {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM teachers";
    client.query(query, (postgressError, postgresResponse) => {
      if (postgressError) {
        console.log("post: ", postgressError.detail);
        reject({
          error: true,
          status: 500,
          description: postgressError.detail,
        });
      }
      resolve(postgresResponse.rows);
    });
  });
}
function selectAllUsers() {
  return new Promise((reject, resolve) => {
    const usersData = {};
    selectAllStudents()
      .then((e) => (usersData.students = e))
      .catch((e) => reject("Error in selectAllStudents()", e));
    selectAllTeachers()
      .then((e) => {
        usersData.teachers = e;
        resolve(usersData);
      })
      .catch((e) => reject("Error in selectAllTeachers()", e));
  });
}
function addUser(user) {
  return new Promise((resolve, reject) => {
    user["password"] = sha256(user.password);
    const query = `INSERT INTO users(ID,role,password)VALUES('${user.id}','${user.role}','${user.password}');`;
    client.query(query, (postgressError, postgresResponse) => {
      if (postgressError) {
        console.log("post: ", postgressError.detail);
        reject({
          error: true,
          status: 500,
          description: postgressError.detail,
        });
      }
      resolve({
        error: false,
        status: 200,
      });
    });
  });
}
module.exports = {
  selectAllUsers,
  addUser,
};
