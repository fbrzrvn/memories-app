const { Post } = require("../models");

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

module.exports = { createPost, fetchPosts };
