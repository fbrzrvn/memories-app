const { Post } = require("../models");

const createPost = async (req, res) => {
  const postData = req.body;
  const newPost = new Post(postData);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

module.exports = { createPost };
