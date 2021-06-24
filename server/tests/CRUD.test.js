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
  const adminLoginCredentials={};
  beforeAll(() => {
    app.client.connect();
    adminLoginCredentials.id= process.env.ADMIN_ID
    adminLoginCredentials.password=process.env.ADMIN_PASSWORD
    app.client.query('TRUNCATE TABLE users;',(error)=>expect(error).toBe(null));
    app.client.query(`INSERT INTO users(ID,role,password)VALUES('${adminLoginCredentials.id}','ADMIN','${sha256(adminLoginCredentials.password)}');`)
  });
  afterAll(()=>app.client.query('TRUNCATE TABLE users;',(error)=>expect(error).toBe(null)))
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
  it("POST admin/adduser", async () => {
    adminLoginCredentials.user={
      "id":"IPUTEST778",
      "role":"student",
      "password":"IPUSTUD"
  };
    const res = await postRequest("/admin/adduser", adminLoginCredentials);
    expect(res.body).toBe(false);
  });
});
