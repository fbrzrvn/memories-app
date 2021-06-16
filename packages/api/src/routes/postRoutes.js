const Router = require("express").Router;
const { auth } = require("../middlewares/auth");
const { postController } = require("../controllers");

const postRouter = Router();

postRouter.get("/", postController.fetchPosts);
postRouter.get("/:id", postController.fetchPost);
postRouter.post("/create", auth, postController.createPost);
postRouter.patch("/update/:id", auth, postController.updatePost);
postRouter.delete("/delete/:id", auth, postController.deletePost);
postRouter.patch("/like/:id", auth, postController.likePost);

module.exports = {
  postRouter: postRouter,
};
