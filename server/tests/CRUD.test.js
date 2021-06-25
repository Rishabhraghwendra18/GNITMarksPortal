const app = require("../src/index");
const supertest = require("supertest");
const sha256 = require("js-sha256").sha256;
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
    const tables=['users','students','teachers'];
    tables.map(e=>{
      app.client.query(`TRUNCATE TABLE ${e};`, (error) =>
      expect(error).toBe(null)
    );
    })
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
    const res = await getRequest("/admin/dashboard", adminLoginCredentials);
    expect(res.statusCode).toBe(200);
  });
  it("GET admin/Dashboard ", async () => {
    const res = await getRequest("/admin/dashboard", adminLoginCredentials);
    expect(res.body).toEqual([{}]);
  });
  it("POST admin/adduser . Add a student", async () => {
    adminLoginCredentials.user = {
      id: "IPUTEST778",
      name:"xyz",
      branch:"CSE",
      role: "student",
      password: "IPUSTUD",
      sem1:true,
    };
    const res = await postRequest("/admin/adduser", adminLoginCredentials);
    expect(res.status).toBe(200);
    expect(res.body).toBe(false);
  });
  it("POST admin/adduser . Add a teacher",async ()=>{
    adminLoginCredentials.user = {
      id: "IPUTEST779",
      name:"xyz",
      subject:"maths",
      role: "teacher",
      password: "IPUSTeacher",
      sem1:true,
    };
    const res = await postRequest("/admin/adduser", adminLoginCredentials);
    expect(res.status).toBe(200);
    expect(res.body).toBe(false);
  })
  it("GET allUsers", async () => {
    const res = await getRequest("/admin/dashboard", adminLoginCredentials);
    expect(res.body).toEqual(
      expect.arrayContaining([{
        id: "IPUTEST778",
        role: "student",
        password: "IPUSTUD",
      }])
    );
  });
});
