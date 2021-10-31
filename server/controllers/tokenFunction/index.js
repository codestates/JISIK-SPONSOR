require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '1h' });
  },
  sendAccessToken: (res, accessToken) => {
    const cookieOptions = {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      // secure: true,
      httpOnly: true
      // sameSite: 'none'
    };
    res.cookie('accessToken', accessToken, cookieOptions);
  },
  checkAccessToken: (accessToken) => {
    try {
      return jwt.verify(accessToken, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  }
};
