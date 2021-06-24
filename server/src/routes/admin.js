const express = require("express");
const router = express.Router();
const authRole = require("../middlewares/permissonMiddlewares/authRole");
const { addUser } = require("../database/fetchUsersFromDB");

router.get("/dashboard", authRole("ADMIN"), (req, res) => {
  res.status(200);
  res.json([{}]);
});
router.post("/adduser", authRole("ADMIN"), (req, res) => {
  const user = req.body.user;
  addUser(user)
    .then((e) => {
      res.status(e.status);
      res.json(e.error);
    })
    .catch((e) => {
      res.status(e.status);
      res.json({
        error: true,
        description: e.description,
      });
    });
});

module.exports = router;
