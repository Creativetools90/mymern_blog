import express from "express";
import multer from "multer";
import { CreatePost ,getAllPost ,updatePost ,getPost } from "../Controllers/PostController.js";
const PostRoute = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "../client/public/post/");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const uploade = multer({ storage });
PostRoute.post("/createPost", uploade.single("file"), CreatePost);
PostRoute.get("/getAllPost",getAllPost);
PostRoute.put("updatePost/:id",updatePost);
PostRoute.get("/getPost/:id",getPost);
export default PostRoute;
