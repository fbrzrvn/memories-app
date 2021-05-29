const { Post } = require("../models");
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
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { name, title, description, tags, media } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post was found with id: ${id}`);
  }

  const updatedPost = { name, title, description, tags, media, _id: id };

  await Post.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No post was found with id: ${id}`);
  }

  await Post.findByIdAndRemove(id);

  res.json({ message: "Post successfully deleted!" });
};

module.exports = { createPost, fetchPosts, updatePost, deletePost };
