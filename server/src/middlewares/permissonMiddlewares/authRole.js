function authRole(role) {
  return (req, res, next) => {
    if (req.user.role!==role) {
          res.status(403);
          res.json({auth:"you are not allowed"})
          return;
    }
    next();
  };
}
module.exports=authRole