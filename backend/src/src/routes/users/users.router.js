const { Router } = require("express");
const UserController = require("../../controllers/user.controller");

class UserRoutes {
  static get routes() {
    const router = Router();
    router.get("/", UserController.getUsers);
    return router;
  }
}

module.exports = UserRoutes;
