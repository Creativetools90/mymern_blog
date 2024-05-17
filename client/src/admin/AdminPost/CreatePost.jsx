import React, { useState, useRef } from "react";
import "./CreatePost.css";
import { Link } from "react-router-dom";
const CreatePost = () => {
  // const [content, setContent] = useState(''); // State to hold the content of the editor
  const editorRef = useRef(null);
  const handleInput = (e) => {
    const content = editorRef.current.innerHTML;
    console.log(content);
  };
  return (
    <>
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
              <button>add media</button>
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
