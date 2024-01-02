const { Router } = require("express");
const AuthRoutes = require("./auth/auth.router");

class AppRouter {
  static get routes() {
    const router = Router();

    router.use("/api/v1/auth", AuthRoutes.routes);

    return router;
  }
}

module.exports = AppRouter;
