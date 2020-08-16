const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
//const services = require("../services/user.service")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/all", controller.allAccess);

  app.get("/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
  const token = localStorage.getItem('token');

  app.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
//[authJwt.verifyToken, authJwt.isAdmin] controller.adminBoard
