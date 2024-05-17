import React from "react";

const Admin = () => {
 
  return (
    <div className="admin ">
      <div className="leftPannel">
        <div className="admin_logo">
          <h2>your Admin</h2>
        </div>
        <div className="options">
          <ul className="op_list">
            <li className="use_op_list">
              <img src="../../dashboards.png" alt="" />
              <span>Dashboard</span>
            </li>
            <li className="use_op_list">
              <img src="../../post.png" alt="" />
              <span>post</span>
            </li>
            <li className="use_op_list">
              <img src="../../entry.png" alt="" />
              <span>users</span>
            </li>
            <li className="use_op_list">
              <img src="../../theme.png" alt="" />
              <span>theame</span>
            </li>
            <li className="use_op_list">
              <img src="../../theme.png" alt="" />
              <span>notification</span>
            </li>
            <li className="use_op_list">
              <img src="../../theme.png" alt="" />
              <span>camments</span>
            </li>
            <li className="use_op_list">
              <img src="../../setting.png" alt="" />
              <span>setting</span>
            </li>
          </ul>
        </div>
        <div className="logout_bar">
          <a href="">logout</a>
        </div>
      </div>
      <div className="rightPannel">
        <div className="topPannel">
          <nav className="topNav">
            <div className="option_open_msg">
              <p className="msg">user setting pannel</p>
            </div>
            <div className="menus_top">
              <div className="wrap_m">
                <img src="../../message.png" alt="" />
                <img src="../../bell.png" alt="" />
                <div className="user_verfity">
                  <div className="user_profile">
                    <img src="../../userprofile.png" alt="" />
                  </div>
                  <div className="user_name">
                    <h2 className="u_n">creativemoon</h2>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="mainPannel"></div>
      </div>
    </div>
  );
};

export default Admin;
