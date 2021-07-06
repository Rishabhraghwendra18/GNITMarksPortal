const client = require("./postgresqlIntialization");
const sha256 = require("js-sha256").sha256;
function selectAllStudents(semester) {
  return new Promise((resolve, reject) => {
    const query = `SELECT students.id,students.name,students.branch FROM students JOIN semester_lists ON students.id=semester_lists.id WHERE semester_lists.semester='${semester}';`;
    client.query(query, (postgressError, postgresResponse) => {
      if (postgressError) {
        console.log("post: ", postgressError);
        reject({
          error: true,
          status: 500,
          description: postgressError.detail,
        });
        return;
      }
      resolve(postgresResponse.rows);
    });
  });
}
function selectAllTeachers(semester) {
  return new Promise((resolve, reject) => {
    const query = `SELECT teachers.id,teachers.name,teachers.subject FROM teachers JOIN semester_lists ON teachers.id=semester_lists.id WHERE semester_lists.semester='${semester}';`;
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
function selectAllUsers(semester) {
  return new Promise((resolve, reject) => {
    const usersData = {};
    selectAllStudents(semester)
      .then((e) => (usersData.students = e))
      .catch((e) => reject("Error in selectAllStudents()", e));
    selectAllTeachers(semester)
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
    const query = [
      `INSERT INTO users(ID,role,password)VALUES('${user.id}','${user.role}','${user.password}');`,
    ];
    const branchOrSubject = user.branch ? "branch" : "subject";
    const arrayOfKeysFromObject = Object.entries(user);
    const SEMESTER_NUMBER_AT_INDEX = 0;
    const semesterNumber = arrayOfKeysFromObject.filter(
      ([semester, value]) => value===true
    ).flat()[SEMESTER_NUMBER_AT_INDEX];
    query.push(
      `INSERT INTO ${user.role}s(id,name,${branchOrSubject}) VALUES('${user.id}','${user.name}','${user[branchOrSubject]}');`
    );
    query.push(
      `INSERT INTO semester_lists(id,semester) VALUES('${user.id}','${semesterNumber}');`
    );
    if(branchOrSubject=="branch")
      query.push(
        `INSERT INTO ${semesterNumber}(id) VALUES('${user.id}');`
      );
    query.map(query=>{
      client.query(query, (postgressError, postgresResponse) => {
        if (postgressError) {
          reject({
            error: true,
            status: 500,
            description: postgressError.detail,
          });
        }
      });
    });
    resolve({
      error: false,
      status: 200,
    });
  });
}
module.exports = {
  selectAllStudents,
  selectAllUsers,
  addUser,
};