const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

//@description   Register new User
//@route         Post api/users
//@access        public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please complete the fields');
  }

  // Check if user exists

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);

    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);

  //Create user

  const user = await User.create({
    name,
    email,
    password: hashedpassword,
  });

  if (user) {
    console.log(user);
    res.status(201).json({
      name: user.name,
      email: user.email,
      _id: user.id,
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});

//@description   Authenticate User
//@route         Post api/users/login
//@access        public

//Check for user email
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user,'aqui')

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      name: user.name,
      email: user.email,
      _id: user.id,
    });
  } else {
    res.status(400);
    throw new Error('Invalid Credentials');
  }
});

//@description   Get User data
//@route         Post api/users/login/me
//@access        public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'user data display' });
});

module.exports = { registerUser, loginUser, getMe };
