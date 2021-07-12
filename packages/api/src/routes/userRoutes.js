const Router = require("express").Router;
const { auth } = require("../middlewares/auth");
const { userController } = require("../controllers");

const userRouter = Router();

userRouter.post("/users/update", auth, userController.updateUserProfile);
userRouter.get("/users/me", auth, userController.fetchCurrentUser);
userRouter.get("/users/:id", userController.fetchUserById);

module.exports = {
  userRouter: userRouter,
};
