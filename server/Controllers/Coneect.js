import Admin from "../Models/AdminModel.js";

import jwt from "jsonwebtoken";
export const AdminSatup = async (req, res) => {
  try {
    const CreateAdminUser = new Admin(req.body);
    if (!CreateAdminUser)
      return res.status(404).json({ msg: "user not found" });
    const saveData = await CreateAdminUser.save();
    res.status(200).json({ msg: "register successfully", saveData  });
  } catch (e) {
    res.status(403).json({ msg: "UserName already Exists" });
  }
};

export const AdminLogin = async (req, res) => {
  try {
    const { user, pass } = req.body;
    const AdminLoginUser = await Admin.findOne({ user: user });
    if (pass !== AdminLoginUser.pass)
      return res.status(404).json({ msg: "invalid password" });
    // make a admin user token
    const Admintoken = jwt.sign(
      { AdminId: AdminLoginUser._id },
      "your_secret_key",
      {
        expiresIn: "1h",
      }
    );
    // If email and password are correct, set the cookie
    res.cookie("AdminToken", Admintoken, { httpOnly: true });
    res
      .status(200)
      .json({ msg: "admin login successful", AdminLoginUser, Admintoken });
  } catch (err) {
    res.status(403).json({ msg: "Invalid Account" });
  }
};

export const AdminAllUser = async (req, res) => {
  try {
    const AllUser = await Admin.find();
    if (!AllUser) return res.status(404).json({ msg: "not users" });
    res.status(200).json({ msg: "users found", AllUser });
  } catch (err) {
    res.status(403).json({ msg: "not users" });
  }
};

// get user from name and id
export const AdminLoginUser = async (req, res) => {
  try {
    const user = await Admin.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.status(200).json({ msg: "user found", user });
  } catch (e) {
    res.status(403).json({msg :"UserName not Exists"})
  }
};
