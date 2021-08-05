const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const client = require("./database/postgresqlIntialization");
const userAuthentication = require("./middlewares/authenticationMiddlewares/userAuthentication");
const admin = require("./routes/admin");
const teacher = require("./routes/teacher");
const student = require("./routes/student");

const PORT = process.env.PORT || 5000;
dotenv.config();
const app = express();
app.use(express.json());

if (process.env.NODE_ENV == "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
} else {
  const corsOption = {
    origin: "http://localhost:3000",
  };
  app.use(cors(corsOption));
  app.get("/", (req, res) => {
    res.json({ msg: "Express API running in development" });
    res.status(200);
  });
}

app.use(userAuthentication);
app.use("/admin", admin);
app.use("/teacher", teacher);
app.use("/student", student);

app.client = client;

app.listen(PORT, () => console.log(`Server Listening at ${PORT}`));

module.exports = app;
