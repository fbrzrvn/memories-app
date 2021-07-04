const UserModel = require("./user");
const PostModel = require("./post");
const CommentModel = require("./comment");

module.exports = {
  User: UserModel,
  Post: PostModel,
  Comment: CommentModel,
};
