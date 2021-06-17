const app = require("../src/index");
const supertest = require("supertest");
const request = supertest(app);

function getRequest(endPoint, jsonBody = null) {
  return request.get(endPoint).send(jsonBody);
}
function postRequest(endPoint, jsonBody) {
  return request.post(endPoint).send(jsonBody);
}
describe("1st test", () => {
  beforeAll(() => app.client.connect());
  it("GET / . Status code must be 203", async () => {
    const body = { id: 3, password: "jksjafdklsa" };
    const res = await getRequest("/", body);
    console.log(res.statusCode);
    expect(res.status).toBe(203);
  });
  it("Not a Admin", async () => {
    const res = await getRequest("/admin?id=1&?id=1");
    expect(res.body).toEqual({ isUser: false, desc: "user not found" });
  });
  it("A Admin", async () => {
    const jsonBody = {
      id: "GNIT1111",
      password:
        "ab1ee36084341dcaddbaff506d63ce2221dcbaca3bfb0215ac8f355c23f81d05",
    };
    const res = await getRequest("/admin", jsonBody);
    expect(res.statusCode).toBe(200);
  });
  it("admin/Dashboard", async () => {
    const jsonBody = {
      id: "GNIT1111",
      password:
        "ab1ee36084341dcaddbaff506d63ce2221dcbaca3bfb0215ac8f355c23f81d05",
    };
    const res = await getRequest("/admin/dashboard", jsonBody);
    expect(res.statusCode).toBe(200);
  });
  it("admin/adduser", async () => {
    const jsonBody = {
      id: "GNIT1111",
      password:
        "ab1ee36084341dcaddbaff506d63ce2221dcbaca3bfb0215ac8f355c23f81d05",
    };
    const res = await postRequest("/admin/dashboard", jsonBody);
    expect(res.statusCode).toBe(200);
  });
});
