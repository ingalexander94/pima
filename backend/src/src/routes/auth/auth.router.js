const { Router } = require("express");
const AuthController = require("../../controllers/auth.controller");
const AuthMiddleware = require("../../middlewares/validate-token");

class AuthRoutes {
  static get routes() {
    const router = Router();
    router.post("/login", AuthController.login);
    router.post("/validate_email", AuthController.validateEmail);
    router.post("/recovery", AuthController.recoveryPassword);
    router.post("/validate_code", AuthController.validateCode);
    router.patch("/update_password", AuthController.updatePassword);
    router.get("/renew", AuthMiddleware.validateJWT, AuthController.renew);
    return router;
  }
}

module.exports = AuthRoutes;
