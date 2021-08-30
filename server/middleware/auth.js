const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.model");

exports.protect = async (req, res, next) => {
  let token;
  let body = req.body;

  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1]
  }

  if(!token) {
    return res.status(401).json({success: false, error:'Token Missing'});
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(decoded.id);

    if(!user) {
      return res.status(404).json({success: false, error:"No user found"});
    }

    req.user = user;
    req.body = body;
    
    next();
  } catch (err) {
    return res.status(500).json({success: false, error:'not authorized'});
  }
}