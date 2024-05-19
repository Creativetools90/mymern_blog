import React from "react";

const CreatePost = () => {
  return (
    <>
      <div className="createPostContainer">
        <div className="editMode">
          <div className="head">new post</div>
          <div className="userprofile">
            <div className="pic">
              <div className="profile_pic1">
                <img src="/adminAssets/tools.png" alt="" />
              </div>
              <p>root</p>
            </div>
            <div className="save">
              <button>save post</button>
            </div>
          </div>
          <div className="addTag  titleBar">
          <input type="text" name="tag" placeholder="Enter your blog ttile" />
          </div>
          <div className="caption">
            <p className="about_pera">caption</p>
            <div className="captionEditor" contentEditable></div>
            <div className="draft">
              <input type="checkbox" name="draft" id="draft" />
              <p>this is a draft</p>
            </div>
          </div>
          <div className="tags">
            <p className="about_pera">tags</p>
            <div className="addTag">
              <input type="text" name="tag" placeholder="add your blog tags" />
              <button>add</button>
            </div>
            <ul className="tag_list">
              <li className="mytag">blog</li>
              <li className="mytag">coding</li>
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
                <input type="file" name="image" id="image" />
              </div>
            </div>
          </div>
          <div className="timeprosses">
            <button>schedule</button>
          </div>
        </div>
        <div className="prevideMode">
          <div className="preview_head">
            <h3>preview</h3>
            <p className="prePera">
              Preview shows how you content will look when publihsed. Social
              network updates may after its final appearence.{" "}
              <a href="">please report then</a>
            </p>
          </div>
          <div className="previde_mode_switch"></div>
          <div className="cardPewview"></div>
          <div className="moreInfoPewview"></div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
