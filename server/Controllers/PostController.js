import post from "../Models/PostModel.js";

export const CreatePost = async (req, res) => {
  try {
    const postData = new post({
      title: req.body.title,
      caption: req.body.caption,
      tag : req.body.tag,
      img: req.file.filename,
    });
    if (!postData) return res.status(404).json({ msg: "post not found" });
    const savePost = await postData.save();

    res.status(200).json({ msg: "post create create ", data: savePost});
  } catch (e) {
    res.status(403).json({ msg: "post not create"});

  }
};


export const getAllPost = async (req , res)=>{
  try{
    const myPost = await post.find();
    if (!myPost) return res.status(404).json({ msg: "post not found" });
    res.status(200).json({ msg: "post found", data: myPost});
  }catch (e) {
    res.status(403).json({ msg: "post not file"});

  }
}