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
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
      ],
      default: [],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        default: [],
        ref: "comment",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
