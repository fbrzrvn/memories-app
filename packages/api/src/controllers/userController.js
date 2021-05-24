const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist!" });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password,
    );
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.SECRET,
      { expiresIn: "1h" },
    );

    res.status(200).json({ user: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong! Try again later." });
  }
};

const signUp = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist!" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password don't match!" });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
    });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.SECRET,
      { expiresIn: "1h" },
    );

    return res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong! Try again later." });
  }
};

module.exports = { signIn, signUp };
