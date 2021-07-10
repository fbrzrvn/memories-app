const { authRouter } = require("./authRoutes");
const { userRouter } = require("./userRoutes");
const { postRouter } = require("./postRoutes");

module.exports = {
  authRouter: authRouter,
  userRouter: userRouter,
  postRouter: postRouter,
};
