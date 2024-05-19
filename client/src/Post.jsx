import React, { useEffect, useState } from "react";
import axios from "axios";
import WordLimit from "./WordLimit";
const Post = () => {
  const [post, setPost] = useState([]);
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
    <div className="postContainer">
      <ul className="postlist">
        {
          post.map((v , i)=>{
            return(
              <li key={v._id} className="post">
          <div className="p_img">
            <img src="/pic.jpg" alt="post" />
          </div>
          <div className="p_i">
            <p className="date">
              busnuess travel <span> - may 2, 2024</span>
            </p>
            <div className="i_head_p">
              <h2 className="infoHeading">
               {
                v.title
               }
              </h2>
            </div>
            <p className="pinfoPera">
          
               <WordLimit text={v.caption} limit={20} />
            </p>
            <div className="pinfoprofile">
              <img src="/profile.png" alt="profile" />
              <div className="pro">
                <h3 className="profilename">creativemoon</h3>
                <p>ceo of creativemoon</p>
              </div>
            </div>
          </div>
        </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Post;
