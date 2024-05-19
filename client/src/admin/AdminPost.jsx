import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminPost = () => {
  const [post, setPost] = useState([]);
  const goCreate = () => {
    window.location.href = "createpost";
  };
  useEffect(() => {
    const getpost = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/admin/getAllPost"
        );
        setPost(response.data.myPost);
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    getpost();
  }, []);
  return (
    <div className=" mainMenu adminpost">
      <div className="header_post">
        <h2>add Post</h2>
        <div className="postAdd">
          <button onClick={goCreate}>create post</button>
        </div>
      </div>
      <div className="postList">
        {post.map((v, i) => {
          return (
            <>
              <div key={v._id} className="mypost">
                <div className="profile1">
                  <div className="publishBanner">public</div>
                  <div className="profile_pic">
                    <img src="/adminAssets/tools.png" alt="" />
                  </div>
                  <h2 className="user">root</h2>
                </div>
                <div className="postinfo">
                  <h2 className="title">{v.title}</h2>
                  <div className="other">
                    <div className="date">
                      <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/ios-filled/50/time.png"
                        alt="time"
                      />
                      <p>2024-1-3 / 10:23pm</p>
                    </div>
                    <div className="info">
                      <Link to={"/admin/updatepost/"+v._id} >
                      <button className="seen">read</button>
                      </Link>
                      <button className="del">delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPost;
