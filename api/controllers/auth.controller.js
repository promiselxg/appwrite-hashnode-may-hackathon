const asyncHandler = require('express-async-handler');
const sdk = require('node-appwrite');
const { v4: uuidv4 } = require('uuid');

//@desc     Register User
//@route    POST /api/v1/auth/register
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  try {
    const { email, password, confirm_password } = req.body;
    if (!email || !password || !confirm_password) {
      return res.status(401).json({
        status: false,
        message: 'Please fill out the form.',
      });
    }
    if (password !== confirm_password) {
      return res.status(400).json({
        status: false,
        message: 'Password Mismatch.',
      });
    }
    const client = new sdk.Client();
    const users = new sdk.Users(client);
    client
      .setEndpoint(process.env.APP_ENDPOINT) // Your API Endpoint
      .setProject(process.env.PROJECT_ID) // Your project ID
      .setKey(process.env.API_SECRET_KEY); // Your secret API key

    const response = await users.createBcryptUser(uuidv4(), email, password);
    delete response.password;
    return res.status(201).json({
      status: true,
      response,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      response: error.response,
    });
  }
});

//@desc     Login User
//@route    POST /api/v1/auth/login
//@access   Public
const loginUser = asyncHandler(async (req, res) => {});

//  Generate JWT
const generateToken = (id, role, isAdmin, username) => {
  return JWT.sign({ id, role, isAdmin, username }, process.env.JWT_SECRET, {
    expiresIn: '5d',
  });
};

//  export controllers
module.exports = {
  registerUser,
  loginUser,
};
