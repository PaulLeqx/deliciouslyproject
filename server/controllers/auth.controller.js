const UserModel = require("../models/User.model");

module.exports.signUp = async (req, res, next) => {
  const {username, email, password} = req.body;

  try {
    const user = await UserModel.create({username, email, password});

    await user.save();

    res.status(201).json({success: true});
  } catch (err) {
    res.status(500).json({success: false, error:"Missing Credentials"});
  }
};

module.exports.login = async (req, res, next) => {
  const {email, password} = req.body;

  if (!email || ! password) {
    return res.status(500).json({success: false, error: "invalid credentials"});
  }

  try {
    const user = await UserModel.findOne({ email }).select("+password");

    if(!user) {
      return res.status(404).json({success: false, error:"No user found"});
    }

    const isMatch = await user.matchPasswords(password);

    if(!isMatch) {
      return res.status(404).json({success: false, error:"Incorrest Pwd"});
    }

    sendToken(user, 200, res);
  } catch (err) {
    res.status(500).json({success: false, error:"Missing Credentials"});
    console.log(err)
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  const userInfo = {id : user._id, username: user.username, email: user.email}
  res.status(statusCode).json({success: true, token, userInfo});
};