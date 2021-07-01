const client = require("./postgresqlIntialization");
const sha256 = require("js-sha256").sha256;
function selectAllStudents() {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM students RIGHT JOIN student_semester_lists ON students.id=student_semester_lists.id;";
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
    const query = "SELECT * FROM teachers RIGHT JOIN teacher_semester_lists ON teachers.id=teacher_semester_lists.id;";
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
  return new Promise((resolve, reject) => {
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
      `INSERT INTO ${user.role}_semester_lists(id,semester) VALUES('${user.id}','${semesterNumber}');`
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
        resolve({
          error: false,
          status: 200,
        });
      });
    })
  });
}
module.exports = {
  selectAllUsers,
  addUser,
};
