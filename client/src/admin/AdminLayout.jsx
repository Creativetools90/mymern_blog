import React from "react";
import "./Admin.css";
import { Outlet } from "react-router-dom";
import Admin from "./Admin";
import "./root.css";
import Cookies from "js-cookie";
const AdminLayout = () => {
  const isTokenSet = Cookies.get("AdminToken") || undefined;
  if (isTokenSet) {
    const AdminToken = Cookies.get("AdminToken");
    console.log(AdminToken);
    return(
      <>
       <Admin />
      </>
    )
  } else {
    console.log("token is not set");
    
    window.location.href = "/Adminlogin";
  } 
 
};

export default AdminLayout;
