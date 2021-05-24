const Router = require("express").Router;

const { userController } = require("../controllers");

const userRouter = Router();

userRouter.post("/sign-up", userController.signUp);
userRouter.post("/sign-in", userController.signIn);

module.exports = {
  userRouter: userRouter,
};
