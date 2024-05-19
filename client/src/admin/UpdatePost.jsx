import React from "react";
import { useState } from "react";
import BlogView from "./preview/BlogView";
import CardView from "./preview/CardView";
import { toast } from "react-hot-toast";
import axios from "axios";
const UpdatePost = () => {
  const [editmodeZoom, setEditmodeZoom] = useState(false);
  const [prewmodeZoom, setPrevmodeZoom] = useState(false);
  const [viewMode, setViewMode] = useState("card");
  const [title, setTitle] = useState("");
  const [capttion, setCaptions] = useState("");
  const [file, setFile] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const editModeZoomhanddle = () => {
    setEditmodeZoom(!editmodeZoom);
  };
  const pewvModeZoomhanddle = () => {
    setPrevmodeZoom(!prewmodeZoom);
  };
  const viewModehanddle = (Mode) => {
    setViewMode(Mode);
  };
  const handleTag = () => {
    setTags([...tags, tagInput]);
    setTagInput("");
  };
  const handleSubitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("caption", capttion);
    formData.append("file", file);
    formData.append("tag", tags);

    try {
      await axios
        .post("http://localhost:4000/admin/createPost", formData)
        .then((res) => {
          toast.success(res.data.msg, {
            position: "top-right",
            duration: 900,
          });
        })
        .catch((e) => {
          toast.error(e.response.data.msg, {
            position: "top-right",
            duration: 900,
          });
        });
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <>
      <div className="createPostContainer">
        <div className={editmodeZoom ? "editModeZoom" : "editMode"}>
          <div className="head">
            new post
            <img
              width="25"
              height="25"
              onClick={editModeZoomhanddle}
              src="https://img.icons8.com/ios/50/expand--v1.png"
              alt="expand--v1"
            />
          </div>
          <div className="userprofile">
            <div className="pic">
              <div className="profile_pic1">
                <img src="/adminAssets/tools.png" alt="" />
              </div>
              <p>root</p>
            </div>
            <div className="save">
              <button onClick={handleSubitForm}>save post</button>
            </div>
          </div>
          <div className="addTag  titleBar">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your blog ttile"
            />
          </div>
          <div className="caption">
            <p className="about_pera">caption</p>
            <div
              className="captionEditor"
              onInput={(e) => setCaptions(e.target.innerText)}
              contentEditable
            ></div>
            <div className="wordLenth">
              <p>{capttion.length}</p>
            </div>

            <div className="draft">
              <input type="checkbox" name="draft" id="draft" />
              <p>this is a draft</p>
            </div>
          </div>
          <div className="tags">
            <p className="about_pera">tags</p>
            <div className="addTag">
              <input
                type="text"
                onChange={(e) => setTagInput(e.target.value)}
                value={tagInput}
                name="tag"
                placeholder="add your blog tags"
              />
              <button onClick={handleTag}>add</button>
            </div>
            <ul className="tag_list">
              {tags.map((tag, index) => {
                return (
                  <li key={index} className="mytag">
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="addImage">
            <p className="about_pera">add images</p>
            <div className="imageList">
              <div className="add">
                <label htmlFor="image">
                  <img
                    width="80"
                    height="80"
                    src="https://img.icons8.com/ios/50/add--v1.png"
                    alt="add--v1"
                  />
                </label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  name="img"
                  id="image"
                />
              </div>
              {file && (
                <div className="add">
                  <img src={URL.createObjectURL(file)} alt="" />
                </div>
              )}
            </div>
          </div>
          <div className="timeprosses">
            <button>schedule</button>
          </div>
        </div>
        <div className={prewmodeZoom ? "prevideModeZoom" : "prevideMode"}>
          <div className="zoom">
            <img
              width="25"
              height="25"
              onClick={pewvModeZoomhanddle}
              src="https://img.icons8.com/ios/50/expand--v1.png"
              alt="expand--v1"
            />
          </div>
          <div className="preview_head">
            <h3>preview</h3>

            <p className="prePera">
              Preview shows how you content will look when publihsed. Social
              network updates may after its final appearence.{" "}
              <a href="">please report then</a>
            </p>
          </div>
          <div className="previde_mode_switch">
            <button onClick={() => viewModehanddle("card")}>card View</button>
            <button onClick={() => viewModehanddle("blog")}>BLog view</button>
          </div>
          <div className="view">
            {viewMode === "card" ? (
              <CardView
                imgUrl={file ? URL.createObjectURL(file) : ""}
                getTitle={title}
                getCaption={capttion}
              />
            ) : (
              <BlogView />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePost;