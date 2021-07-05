const app = require("../src/index");
const supertest = require("supertest");
const sha256 = require("js-sha256").sha256;
const db=require("../src/database/fetchUsersFromDB");
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
    try {
      const res = await getRequest("/", body);
      expect(res.status).toBe(203);
      
    } catch (error) {
      console.log("error: ",error);
    }
  });
  it("Not a Admin", async () => {
    try {
      const res = await getRequest("/admin?id=1&?id=1");
    expect(res.body).toEqual({
      isUser: false,
      desc: "Please enter your password in input field",
    });
    } catch (error) {
      console.log("error: ",error);
    }
    
  });
  it("A Admin", async () => {
    try {
      const res = await getRequest("/admin/dashboard?category=student&semester=sem1", adminLoginCredentials);
      expect(res.statusCode).toBe(200);
      
    } catch (error) {
      console.log("error: ",error);
    }
  });
  it("GET admin/Dashboard . Before any user in db ", async () => {
    try {
      const res = await getRequest("/admin/dashboard", adminLoginCredentials);
      expect(res.body).toEqual({ students: [], teachers: [] });
      
    } catch (error) {
      console.log("error: ",error);
    }
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
      try {
        const res = await postRequest("/admin/adduser", adminLoginCredentials);
        expect(res.status).toBe(200);
        expect(res.body).toBe(false);
      } catch (error) {
        console.log("error: ",error);
      }
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
      try {
        const res = await postRequest("/admin/adduser", adminLoginCredentials);
        expect(res.status).toBe(200);
        expect(res.body).toBe(false);
      } catch (error) {
        console.log("error: ",error);
      }
    });
  });
  it("GET allUsers . After some users in db", async () => {
    const students = [
      {
        id: "IPUTEST778",
        name: "xyz",
        branch: "CSE",
      },
      {
        id: "IPUTEST608",
        name: "Prem Chand",
        branch: "ME",
      },
      {
        id: "IPUTEST500",
        name: "Kum Lal",
        branch: "IT",
      },
      {
        id: "IPUTEST999",
        name: "Aksh Bhatia",
        branch: "CSE",
      },
    ];
    const teachers = [
      {
        id: "IPUTEST779",
        name: "xyz",
        subject: "maths",
      }
    ];
    try {
      const res = await getRequest("/admin/dashboard?category=student&semester=sem1", adminLoginCredentials);
      expect(res.body).toHaveProperty("students");
      expect(res.body).toHaveProperty("teachers");
      expect(res.body).toMatchObject({
        students,
        teachers
      });
    } catch (error) {
      console.log("error: ",error);
    }
  });
  it("Get all students of sem1 . GET /teacher/dashboard",async ()=>{
    const res= await getRequest("/teacher/dashboard",adminLoginCredentials);
    const dbData= await db.selectAllStudents("sem1");
    expect(res.body).toMatchObject(dbData);
    
    // try {
    // } catch (error) {
    //   console.log("error: ",error);
    // }
  });
});
