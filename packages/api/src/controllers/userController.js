const mongoose = require("mongoose");
const { Post, User } = require("../models");
const sanitazeUser = require("../utils/sanitazeUser");

const fetchCurrentUser = async (req, res) => {
  if (!req.userId) {
    return res.status(401).json({ message: "Unauthenticated" });
  }
  const id = req.userId;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ message: `No user was found with id: ${id}` });
  }
  try {
    const user = await User.findById(id);
    const userPosts = await Post.find({ author: id }).populate({
      path: "author",
      select: "_id, name",
    });
    const sanitazedUser = sanitazeUser(user);
    res.status(200).json({ user: sanitazedUser, userPosts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const fetchUserById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ message: `No user was found with id: ${id}` });
  }
  try {
    const user = await User.findById(id);
    const userPosts = await Post.find({ author: id }).populate({
      path: "author",
      select: "_id, name",
    });
    const sanitazedUser = sanitazeUser(user);
    res.status(200).json({ user: sanitazedUser, userPosts });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { fetchCurrentUser, fetchUserById };
