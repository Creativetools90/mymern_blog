import { useState , useContext } from "react";
import notificationIcon from "/adminAssets/icon/nofication.svg";
import vector from "/adminAssets/icon/Vector.svg";
import { MyAdminContext } from "./AdminContext";
const TopPanel = () => {
  const { AdminUserName } = useContext(MyAdminContext);
  return (
    <div className="topPannel">
      <div className="profile">
        <div className="userprofilepack">
          <div className="profile_pic">
            <img src="/adminAssets/tools.png" alt="" />
          </div>
          <h3>{AdminUserName.user}</h3>
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
