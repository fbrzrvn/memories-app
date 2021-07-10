const { Post } = require("../models");

const fetchUserPosts = async (req, res) => {
  if (!req.userId) {
    return res.status(401).json({ message: "Unauthenticated" });
  }
  try {
    const id = req.userId;
    const userPosts = await Post.find({ author: id }).populate({
      path: "author",
      select: "_id, name",
    });
    res.status(200).json(userPosts);
  } catch (errror) {
    res.status(404).json({ message: "No posts or user was found" });
  }
};

module.exports = { fetchUserPosts };
