const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function authenticateJWT(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    // console.log("Decoded token:", decoded);
    req.user = decoded;
    next();
  });
};
