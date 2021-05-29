const Router = require("express").Router;
const { auth } = require("../middlewares/auth");
const { postController } = require("../controllers");

const postRouter = Router();

postRouter.get("/", postController.fetchPosts);
postRouter.post("/create", auth, postController.createPost);
postRouter.patch("/update/:id", auth, postController.updatePost);
postRouter.delete("/delete/:id", postController.deletePost);

module.exports = {
  postRouter: postRouter,
};
