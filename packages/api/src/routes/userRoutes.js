const Router = require("express").Router;
const { auth } = require("../middlewares/auth");
const { userController } = require("../controllers");

const userRouter = Router();

userRouter.get("/users/me", auth, userController.fetchUserPosts);

module.exports = {
  userRouter: userRouter,
};
