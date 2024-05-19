import post from "../Models/PostModel.js";

export const CreatePost = async (req, res) => {
  try {
    const postData = new post({
      title: req.body.title,
      caption: req.body.caption,
      tag : req.body.tag,
      img: req.file.filename,
    });
    const savePost = await postData.save();
    res.status(200).json({ msg: "post create create ", data: savePost});
  } catch (e) {
    res.status(403).json({ msg: err.message });
  }
};
