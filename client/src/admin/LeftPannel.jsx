import React from 'react'
import Cookies from "js-cookie";
import { useState , useContext } from 'react';
import { MyAdminContext } from './AdminContext';
import DashBorad from './DeshBorad';
import AdminPost from './AdminPost';
import Setting from './Setting';
const LeftPannel = () => {
    const logout = ()=>{
        Cookies.remove("AdminToken");
        window.location.href = "/";
    }
    const {selectedOption  , setSelectedOption} = useContext(MyAdminContext);
    const handleOption = (option) =>{
        setSelectedOption(option);
    }
   
  return (
    <>
    <div className="leftPannel">
        <div className="admin_logo">
          <h2>your Admin</h2>
        </div>
        <div className="options">
          <ul className="op_list">
            <li className="use_op_list"  onClick={()=>handleOption(<DashBorad/>)}  >
              <img src="../../dashboards.png" alt="" />
              <span>Dashboard</span>
            </li>
            <li className="use_op_list" onClick={()=>handleOption(<AdminPost/>)}  >
              <img src="../../post.png" alt=""   />
              <span>post</span>
            </li>
            <li className="use_op_list" onClick={()=>handleOption('UserEntry')} >
              <img src="../../entry.png" alt=""  />
              <span>users</span>
            </li>
            <li className="use_op_list"  >
              <img src="../../theme.png" alt=""  />
              <span>theame</span>
            </li>
            <li className="use_op_list">
              <img src="../../theme.png" alt="" />
              <span>notification</span>
            </li>
            <li className="use_op_list">
              <img src="../../theme.png" alt=""  />
              <span>comments</span>
            </li>
            <li className="use_op_list" onClick={()=>handleOption(<Setting/>)} >
              <img src="../../setting.png" alt=""  />
              <span>setting</span>
            </li>
          </ul>
        </div>
        <div className="logout_bar">
          <a href="" onClick={logout} >logout</a>
        </div>
      </div>
    </>
  )
}

export default LeftPannel