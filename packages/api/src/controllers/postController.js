const { Post, Comment } = require("../models");
const mongoose = require("mongoose");

const createPost = async (req, res) => {
  const postData = req.body;
  const newPost = new Post({
    ...postData,
    author: req.userId,
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

const fetchPosts = async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 9;
    // get the starting index of every page
    const startIndex = (Number(page) - 1) * LIMIT;
    const totalPosts = await Post.countDocuments({});
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .limit(LIMIT)
      .skip(startIndex)
      .populate({ path: "author", select: "_id, name" });
    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(totalPosts / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const fetchPost = async (req, res) => {
  const { id } = req.params;
  const LIMIT = 3;
  try {
    const post = await Post.findById(id)
      .populate({ path: "author", select: "_id, name" })
      .populate({
        path: "comments",
        select: "-__v -id -updatedAt",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "author",
          select: "_id name createdAt",
        },
      })
      .select("-__v")
      .lean()
      .exec();
    const relatedPosts = await Post.find({ tags: { $in: post.tags } })
      .populate({ path: "author", select: "_id, name" })
      .limit(LIMIT);
    res.status(200).json({ data: post, relatedPosts: relatedPosts });
  } catch (error) {
    res.status(400).json({ message: `No post was found with id: ${id}` });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, description, tags, media } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ message: `No post was found with id: ${id}` });
  }

  const updatedPost = { title, description, tags, media, _id: id };

  await Post.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ message: `No post was found with id: ${id}` });
  }

  await Post.findByIdAndRemove(id);

  res.status(200).json({ message: "Post successfully deleted!" });
};

const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ message: `No post was found with id: ${id}` });
  }

  const post = await Post.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));
  // if there is not like
  if (index === -1) {
    // like post
    post.likes.push(req.userId);
  } else {
    // dislike post
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const likedPost = await Post.findByIdAndUpdate(id, post, { new: true });

  res.status(200).json(likedPost);
};

const commentPost = async (req, res) => {
  const commentData = req.body;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ message: `No post was found with id: ${id}` });
  }

  const post = await Post.findById(id);

  const newComment = new Comment({
    ...commentData,
    author: req.userId,
    post: post,
  });

  post.comments.push(newComment._id);

  await post.save();
  await newComment.save();

  const commentedPost = await Post.findByIdAndUpdate(id, post, { new: true });
  res.status(200).json(commentedPost);
};

const deleteComment = async (req, res) => {
  const { postId, commentId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    return res
      .status(404)
      .json({ message: `No comment was found with id: ${commentId}` });
  }

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res
      .status(404)
      .json({ message: `No post was found with id: ${commentId}` });
  }

  const deleteComment = Comment.findByIdAndRemove(commentId);
  const deletePostComment = Post.findByIdAndUpdate(postId, {
    $pull: {
      comments: {
        $in: [commentId],
      },
    },
  });

  await Promise.all([
    deleteComment.catch((error) => console.log(error)),
    deletePostComment.catch((error) => console.log(error)),
  ]);

  res.status(200).json({ message: `Comment successfully deleted!` });
};

module.exports = {
  createPost,
  fetchPosts,
  updatePost,
  deletePost,
  likePost,
  fetchPost,
  commentPost,
  deleteComment,
};
