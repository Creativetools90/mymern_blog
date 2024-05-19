import React from "react";
import dashborad from "/adminAssets/icon/dash.svg";
import peaple from "/adminAssets/icon/peaple.svg";
import post from "/adminAssets/icon/post.svg";
import admin from "/adminAssets/icon/admin.svg";
import { Link } from "react-router-dom";
const LeftPannel = () => {
  return (
    <div className="leftPannel">
      <div className="left_optionMenuBar">
        <ul className="meus_option">
          <li className="a_link">
            <img src={dashborad} alt="" />
            <span>Dashboard</span>
          </li>
          <li className="a_link">
            <img src={peaple} alt="" />
            <span>peaple</span>
          </li>
          <li className="a_link">
            <img src={post} alt="" />
            <Link to="adminpost" className="link">
              <span>post</span>
            </Link>
          </li>
          <li className="a_link">
            <img src={admin} alt="" />
            <Link to="adminsetting">
              <span>Administration</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="exitBar">
        <div className="bar_e">
          <button>exit</button>
        </div>
      </div>
    </div>
  );
};

export default LeftPannel;
