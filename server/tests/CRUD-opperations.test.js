const app = require("../src/index");
const supertest = require("supertest");
const sha256 = require("js-sha256").sha256;
const db = require("../src/database/fetchUsersFromDB");
const request = supertest(app);

function getRequest(endPoint) {
  return request.get(endPoint);
}
function postRequest(endPoint, jsonBody) {
  return request.post(endPoint).send(jsonBody);
}
function putRequest(endPoint,jsonBody){
  return request.put(endPoint).send(jsonBody);
}
function setUpDatabase(adminLoginCredentials) {
 return function(){
  app.client.connect();
  adminLoginCredentials.id = process.env.ADMIN_ID;
  adminLoginCredentials.password = process.env.ADMIN_PASSWORD;
  const tables = [
    "users",
    "semester_lists",
    "students",
    "teachers",
    "sem1",
    "sem2",
    "sem3",
    "sem4",
    "sem5",
    "sem6",
    "sem7",
    "sem8",
  ];
  tables.map((e) => {
    app.client.query(`TRUNCATE TABLE ${e};`, (error) =>
      expect(error).toBe(null)
    );
  });
  app.client.query(
    `INSERT INTO users(ID,role,password)VALUES('${
      adminLoginCredentials.id
    }','ADMIN','${sha256(adminLoginCredentials.password)}');`
  );
 }
}
describe("1st test", () => {
  const adminLoginCredentials = {};
  beforeAll(setUpDatabase(adminLoginCredentials));
  it("GET / . Status code must be 203", async () => {
    const res = await getRequest("/");
    expect(res.status).toBe(200);
  });
  it("Not a Admin", async () => {
    const res = await getRequest("/admin?id=1&?id=1");
    expect(res.body).toEqual({
      isUser: false,
      desc: "Please enter your password in input field",
    });
  });
  it("A Admin", async () => {
    const res = await postRequest(
      "/admin/dashboard?category=student&semester=sem1",
      adminLoginCredentials
    );
    expect(res.statusCode).toBe(200);
  });
  it("GET admin/Dashboard . Before any user in db ", async () => {
    const res = await postRequest("/admin/dashboard", adminLoginCredentials);
    expect(res.body).toEqual({ students: [], teachers: [] });
  });
  it("POST admin/adduser . Add students", () => {
    const students = [
      {
        id: "IPUTEST778",
        name: "xyz",
        branch: "CSE",
        role: "student",
        password: "XYZ@1",
        sem1: true,
      },
      {
        id: "IPUTEST608",
        name: "Prem Chand",
        branch: "ME",
        role: "student",
        password: "Prem@1",
        sem6: true,
      },
      {
        id: "IPUTEST500",
        name: "Kum Lal",
        branch: "IT",
        role: "student",
        password: "KumLal@1",
        sem8: true,
      },
      {
        id: "IPUTEST999",
        name: "Aksh Bhatia",
        branch: "CSE",
        role: "student",
        password: "Aksh@6",
        sem4: true,
      },
    ];
    students.map(async (e) => {
      adminLoginCredentials.user = e;
      const res = await postRequest("/admin/adduser", adminLoginCredentials);
      expect(res.status).toBe(200);
      expect(res.body).toBe(false);
    });
  });
  it("POST admin/adduser . Add teachers", () => {
    const teachers = [
      {
        id: "IPUTEST779",
        name: "xyz",
        subject: "applied_mathematics",
        role: "teacher",
        password: "IPUSTeacher",
        sem1: true,
      },
      {
        id: "IPUTEST100",
        name: "A",
        subject: "information_security",
        role: "teacher",
        password: "A@1",
        sem7: true,
      },
      {
        id: "IPUTEST120",
        name: "ABC",
        subject: "industrial_management",
        role: "teacher",
        password: "ABC@1",
        sem5: true,
      },
      {
        id: "IPUTEST550",
        name: "Gaurav",
        subject: "circuits_and_system",
        role: "teacher",
        password: "Gaurav@33",
        sem3: true,
      },
    ];
    teachers.map(async (e) => {
      adminLoginCredentials.user = e;
      const res = await postRequest("/admin/adduser", adminLoginCredentials);
      expect(res.status).toBe(200);
      expect(res.body).toBe(false);
    });
  });
  it("GET allUsers . After some users in db", async () => {
    const students = [
      {
        id: "IPUTEST778",
        name: "xyz",
        branch: "CSE",
      },
    ];
    const teachers = [
      {
        id: "IPUTEST779",
        name: "xyz",
        subject: "applied_mathematics",
      },
    ];
    const res = await postRequest(
      "/admin/dashboard?semester=sem1",
      adminLoginCredentials
    );
    expect(res.body).toHaveProperty("students");
    expect(res.body).toHaveProperty("teachers");
    expect(res.body).toMatchObject({
      students,
      teachers,
    });
  });
  it("Logining as admin in teachers id . GET /teacher/dashboard", async () => {
    const res = await postRequest("/teacher/dashboard", adminLoginCredentials);
    const expectedResponse = {
      auth: "you are not allowed",
    };
    expect(res.body).toMatchObject(expectedResponse);
  });
  it("Get all students of sem1 . GET /teacher/dashboard", async () => {
    const teacherLoginCredentials={
      id:"IPUTEST779",
      password: "IPUSTeacher",
    };
    const res = await postRequest("/teacher/dashboard", teacherLoginCredentials);
    const dbData = await db.selectAllStudents("sem1");
    expect(res.body).toMatchObject(dbData);
  });

  it("Update student record in respective semester. PUT /teacher/uploadmarks",async ()=>{
    const teacherLoginCredentials={
      id: "IPUTEST779",
      password: "IPUSTeacher",
      student:{
          "id":"IPUTEST778",
          "marks":80
      }
  };
    const res = await putRequest("/teacher/uploadmarks", teacherLoginCredentials);
    const response={status:200};
    expect(res.body).toMatchObject(response);
  });
  it("Giving wrong student ID.PUT /teacher/uploadmarks",async()=>{
    const teacherLoginCredentials={
      id: "IPUTEST779",
      password: "IPUSTeacher",
      student:{
          id:8888,
          "marks":80
      }
  };
    const res = await putRequest("/teacher/uploadmarks", teacherLoginCredentials);
    const response={
      error: true,
      status: 500,
      description: "No student id with 8888 found"
  };
    expect(res.body).toMatchObject(response);
  });
  it("Get a particular student data. GET /student/dashboard",async()=>{
    const studentLoginCredentials={
      id: "IPUTEST778",
      password: "XYZ@1",
    };
    const res = await postRequest("/student/dashboard", studentLoginCredentials);
    const dbData = await db.getStudent({semester:"sem1",id:"IPUTEST778"});
    expect(res.body).toMatchObject(dbData);
  });
  it("Promote a student to next semester. POST /admin/promotestudent",async()=>{
    const studentDetails={
      id:"IPUTEST778",
      name:"xyz"
    }
    adminLoginCredentials.user=studentDetails;
    const res = await postRequest("/admin/promotestudent",adminLoginCredentials);
    const dbData = await db.getStudent({semester:"sem2",id:"IPUTEST778"});
    expect(res.body).toMatchObject({ error: false });
    expect(dbData).toMatchObject({
      id: 'IPUTEST778',
      applied_mathematics: null,
      applied_physics: null,
      electronic_devices: null,
      introduction_to_programming: null,
      engineering_mechanics: null,
      communication_skills: null,
      environmental_studies: null
    })
  })
});
