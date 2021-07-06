const app = require("../src/index");
const supertest = require("supertest");
const sha256 = require("js-sha256").sha256;
const db = require("../src/database/fetchUsersFromDB");
const request = supertest(app);

function getRequest(endPoint, jsonBody = null) {
  return request.get(endPoint).send(jsonBody);
}
function postRequest(endPoint, jsonBody) {
  return request.post(endPoint).send(jsonBody);
}
describe("1st test", () => {
  const adminLoginCredentials = {};
  beforeAll(() => {
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
  });
  it("GET / . Status code must be 203", async () => {
    const body = { id: 3, password: "jksjafdklsa" };
    const res = await getRequest("/", body);
    expect(res.status).toBe(203);
  });
  it("Not a Admin", async () => {
    const res = await getRequest("/admin?id=1&?id=1");
    expect(res.body).toEqual({
      isUser: false,
      desc: "Please enter your password in input field",
    });
  });
  it("A Admin", async () => {
    const res = await getRequest(
      "/admin/dashboard?category=student&semester=sem1",
      adminLoginCredentials
    );
    expect(res.statusCode).toBe(200);
  });
  it("GET admin/Dashboard . Before any user in db ", async () => {
    const res = await getRequest("/admin/dashboard", adminLoginCredentials);
    expect(res.body).toEqual({ students: [], teachers: [] });
  });
  it("POST admin/adduser . Add students", () => {
    const students = [
      {
        id: "IPUTEST778",
        name: "xyz",
        branch: "CSE",
        role: "student",
        password: "IPUSTUD",
        sem1: true,
      },
      {
        id: "IPUTEST608",
        name: "Prem Chand",
        branch: "ME",
        role: "student",
        password: "PremSTUD",
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
        subject: "maths",
        role: "teacher",
        password: "IPUSTeacher",
        sem1: true,
      },
      {
        id: "IPUTEST100",
        name: "A",
        subject: "maths",
        role: "teacher",
        password: "A@1",
        sem7: true,
      },
      {
        id: "IPUTEST120",
        name: "ABC",
        subject: "physics",
        role: "teacher",
        password: "ABC@1",
        sem5: true,
      },
      {
        id: "IPUTEST550",
        name: "Gaurav",
        subject: "Chemistry",
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
        subject: "maths",
      },
    ];
    const res = await getRequest(
      "/admin/dashboard?category=student&semester=sem1",
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
    const res = await getRequest("/teacher/dashboard", adminLoginCredentials);
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
    const res = await getRequest("/teacher/dashboard", teacherLoginCredentials);
    const dbData = await db.selectAllStudents("sem1");
    expect(res.body).toMatchObject(dbData);
  });
});
