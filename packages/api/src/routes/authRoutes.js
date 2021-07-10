const Router = require("express").Router;
const { authController } = require("../controllers");

const authRouter = Router();

authRouter.post("/sign-up", authController.signUp);
authRouter.post("/sign-in", authController.signIn);

module.exports = {
  authRouter: authRouter,
};
