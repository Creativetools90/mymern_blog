import React, { useState, useRef } from "react";
import "./CreatePost.css";
import { Link } from "react-router-dom";
const CreatePost = () => {
  // const [content, setContent] = useState(''); // State to hold the content of the editor
  const editorRef = useRef(null);
  const [activeMedia, setActiveMedia] = useState(false); // State to hold the
  const [chooseMedia, setChooseMedia] = useState("uploeadMedia"); // State to hold the
  const handleInput = (e) => {
    const content = editorRef.current.innerHTML;
    console.log(content);
  };
  const doActiveMedia = () => {
    setActiveMedia(!activeMedia);
  };
  const doChooseMedia = (option) => {
    setChooseMedia(option);
  };
  return (
    <>
      <div
        className={
          activeMedia ? "uplodeMediaContainer" : "uplodeMediaContainerHide"
        }
      >
        {/* uplode meddia */}
        <div className="uplodeMedia">
          <div className="chooseMedia">
            <div className="fileChoose">
              <h3>insert media</h3>
              <div className="mediaOption">
                <button onClick={() => doChooseMedia("uploeadMedia")}>
                  uploead media
                </button>
                <button onClick={() => doChooseMedia("MediaLib")}>
                  media libreay
                </button>
              </div>
            </div>
            {chooseMedia === "uploeadMedia" && (
             
             <>

              <div className="uploeadMedua">
              <label htmlFor="chooseUploadImg">
              <img width="50" height="50" src="https://img.icons8.com/ios/50/plus--v1.png" alt="plus--v1"/>
              </label>
              </div>
              <input type="file" id="chooseUploadImg" />
             </>
            )}
            {chooseMedia === "MediaLib" && (
              <div className="gallery">
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
                <img src="https://picsum.photos/200/200" alt="" />
              </div>
            )}
          </div>
          <div className="previewMedia">
            <button onClick={doActiveMedia}>close</button>
            <img src="https://picsum.photos/200/200" alt="" />
          </div>
        </div>
      </div>

      {/*  */}
      <section className="colSec">
        <div className="create_post_container">
          <div className="add">
            <Link to="/admin" className="Link">
              go back
            </Link>
            <h2>add new post</h2>
          </div>
          <div className="postTitleBar">
            <input type="text" name="title" placeholder="enter Post Title" />
          </div>
          <div className="editor">
            <div className="addMedia">
              <button onClick={doActiveMedia}>add media</button>
            </div>
            <div className="addDataPost">
              <div
                className="postEditor"
                contentEditable={true}
                onInput={handleInput}
                ref={editorRef}
              >
                write about you blog
              </div>
            </div>
          </div>
        </div>
        <div className="public_container">
          <div className="publishBar">
            <div className="row1">
              <p>public</p>
              <button>v</button>
            </div>
            <div className="row1">
              <button>save draft</button>
              <button>preview</button>
            </div>
            <div className="row1">
              <a href="">move to trash</a>
              <button>public</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatePost;
