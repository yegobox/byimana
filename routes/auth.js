let bcrypt = require('bcryptjs');
let express = require('express')
let jwt = require('jsonwebtoken');
let auth = require('../middleware/auth');
// User Model
let User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) throw Error('User does not exist');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('Invalid credentials');

    const token = jwt.sign({ id: user._id }, '110197,wda', { expiresIn: 3600 });
    if (!token) throw Error('Couldnt sign the token');

    res.cookie('token',token,{httpOnly:false, expires: new Date(Date.now() + 900000)});
    res.redirect('/redirect');
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.get('/user', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) throw Error('User does not exist');
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
