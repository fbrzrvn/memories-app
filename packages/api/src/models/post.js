const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    media: {
      type: String,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    author: {
      type: String,
      required: [true, "You must be looged in to create post"],
    },
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
