const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exisitngUser = await User.findOne({ email });
    if (!exisitngUser) {
      return res.status(404).json({ message: 'User does not exist!' });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      exisitngUser.password
    );
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign(
      { email: exisitngUser.email, id: exisitngUser._id },
      process.env.SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ result: exisitngUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong! Try again later.' });
  }
};

const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const exisitngUser = await User.findOne({ email });
    if (exisitngUser) {
      return res.status(400).json({ message: 'User already exist!' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password don't match!" });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET,
      { expiresIn: '1h' }
    );

    return res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong! Try again later.' });
  }
};

module.exports = { signIn, signUp };
