const sanitazeUser = (userObj) => ({
  _id: userObj._id,
  name: userObj.name,
  email: userObj.email,
  imageUrl: userObj.imageUrl,
  createdAt: userObj.createdAt,
});

module.exports = sanitazeUser;
