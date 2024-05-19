import React from "react";
import notificationIcon from "/adminAssets/icon/nofication.svg";
import vector from "/adminAssets/icon/Vector.svg";

const TopPanel = () => {
  return (
    <div className="topPannel">
      <div className="profile">
        <div className="userprofilepack">
          <div className="profile_pic">
            <img src="/adminAssets/tools.png" alt="" />
          </div>
          <h3>root</h3>
        </div>
        <div className="down_menu">
            <img src={vector} alt="" />
        </div>
      </div>
      <div className="notificationMenu">
        <img src={notificationIcon} alt="" />
      </div>
    </div>
  );
};

export default TopPanel;
