import Admin from "../Models/AdminModel.js";

export const AdminSatup = async (req, res) => {
  try {
    const CreateAdminUser = new Admin(req.body);
    if (!CreateAdminUser) return res.status(404).json({ msg: "user not found" });
    const saveData = await CreateAdminUser.save();
    res.status(200).json({ msg: "register successfully", saveData });
  } catch (e) {
    res.status(403).json({ msg: "UserName already Exists" });
  }
};


export const AdminLogin = async (req, res) => {
  try {
    const { user, pass } = req.body;
    const adminUser = await Admin.findOne({ user: user });
    if (!adminUser) return res.status(404).json({ msg: "Invalid Account" });
    res.status(200).json({msg:"admin login successful",adminUsers});
  } catch (err) {
    res.status(403).json({ msg: "error", err });
  }
};
