let jwt = require('jsonwebtoken');

let Auth = (req, res, next) => {
  const token = req.cookies.token;

  // Check for token
  if (!token)
    return res.redirect('/login');

  try {
    // Verify token
    const decoded = jwt.verify(token, '110197,wda');
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

module.exports = Auth;