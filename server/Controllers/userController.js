import users from "../Models/userModel.js"
// for create user controller
export const CreateUser = async (req, res) => {
  try {
    const userData = new users(req.body);
    if (!userData) return res.status(404).json({ msg: "user not found" });
    const saveData = await userData.save();
    res.status(200).json({ msg: "register successfully", saveData });
  } catch (e) {
    res.status(403).json({ msg: "UserName already Exists" });
  }
};


// get user from name and id
export const getOneUser = async (req, res) => {
  try {
    const user = await users.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.status(200).json({ msg: "user found", user });
  } catch (e) {
    res.status(403).json({msg :"UserName not Exists"})
  }
};