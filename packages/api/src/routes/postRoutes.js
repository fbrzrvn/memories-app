const Router = require("express").Router;
const { auth } = require("../middlewares/auth");
const { postController } = require("../controllers");

const postRouter = Router();

postRouter.get("/posts", postController.fetchPosts);
postRouter.get("/posts/:id", postController.fetchPost);
postRouter.post("/posts/create", auth, postController.createPost);
postRouter.post("/posts/:id/comment", auth, postController.commentPost);
postRouter.patch("/posts/update/:id", auth, postController.updatePost);
postRouter.delete("/posts/delete/:id", auth, postController.deletePost);
postRouter.delete(
  "/posts/delete/:postId/comment/:commentId",
  auth,
  postController.deleteComment,
);
postRouter.patch("/posts/like/:id", auth, postController.likePost);

module.exports = {
  postRouter: postRouter,
};
