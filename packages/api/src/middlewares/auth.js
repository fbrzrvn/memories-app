const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      const decodeData = jwt.verify(token, process.env.SECRET);
      req.userId = decodeData.id;
    }
    next();
  } catch (error) {
    next(error.message);
  }
};

module.exports = { auth };
