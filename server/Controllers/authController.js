import users from "../Models/userModel.js"
import jwt from "jsonwebtoken";
export const Login = async (req, res) => {
  try {
    const { email, pass } = req.body;
    // email checking
    const emailFind = await users.findOne({ email: email });
    // pass  checking
    if (pass !== emailFind.pass)
      return res.status(404).json({ msg: "invalid password" });
    // Create JWT token
    const token = jwt.sign({ userId: emailFind._id }, "your_secret_key", {
      expiresIn: "1h",
    });
    // If email and password are correct, set the cookie
    res.cookie("token", token, { httpOnly: true });
    // Send success response with user data
    res.status(200).json({ msg: "Login successful", emailFind, token });
  } catch (e) {
    res.status(403).json({ msg: "invalid email",e });
  }
};