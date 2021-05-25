const Router = require("express").Router;

const { postController } = require("../controllers");

const postRouter = Router();

// postRouter.get("/", postController.fetchPosts);
postRouter.post("/create", postController.createPost);

module.exports = {
  postRouter: postRouter,
};
