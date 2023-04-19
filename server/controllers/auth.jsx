const bcrypt = require("bcrypt");
const User = require("../models/User.jsx");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "email already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = new User({ email, password: hashedPassword });

      await user.save();
        
      const payload = {
        id: user._id,
        email: user.email,
      };

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      });
      // res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      res.status(500).json({ message: "Server error", err });
    }
  };

  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // You can implement JWT-based authentication here if needed
      const payload = {
        id: user._id,
        email: user.email,
      };
      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      });
      // res.status(200).json({ message: "Logged in successfully", user });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  };