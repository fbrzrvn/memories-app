const sanitazeUser = (userObj) => ({
  _id: userObj._id,
  name: userObj.name,
  email: userObj.email,
  imageUrl: userObj.imageUrl,
  username: userObj.username,
  bio: userObj.bio,
  followers: userObj.followers,
  following: userObj.following,
  createdAt: userObj.createdAt,
});

module.exports = sanitazeUser;
