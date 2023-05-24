import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  // Get user input
  const { email, password } = req.body;

  // Validate user input
  if (!(email && password)) {
    res.status(400).send("All input is required");
  }

  // Validate if user exist in our database
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  }

  res.status(400).send("Invalid Credentials");
});

// @desc    Register a new user
// route    POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // Get user input
  const { name, email, password } = req.body;

  // Validate user input
  if (!(email && password && name)) {
    res.status(400).send("All input is required");
  }

  // check if user already exist
  // Validate if user exist in our database
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(409).send("User Already Exist. Please Login");
  }

  // Create user in our database
  const user = await User.create({
    name,
    email, // sanitize: convert email to lowercase
    password,
  });

  generateToken(res, user._id);

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
  });
});

// @desc    Logout user
// route    POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "",{
    httpOnly: true,
    expired: new Date(0),
  });
  
  res.status(200).json({ message: "User logged out" });
});

// @desc    Get user profile
// route    GET /api/users/profile
// @access  Privete
const getUserProfile = asyncHandler((req, res) => {
    console.log(req.user)
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }
  res.status(200).json(user);
});

// @desc    Update user profile
// route    PUT /api/users/profile
// @access  Privete
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();
        return res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
        })
    }

  res.status(404).send("User Not Found");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
