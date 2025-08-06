const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res
      .status(401)
      .json({ msg: 'unauthorized HTTP,Token is not provided' });
  }
};

module.exports = authMiddleware;
