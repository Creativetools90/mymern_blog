import React, { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { MyAdminContext } from "./AdminContext";
import axios from "axios";
import { Outlet } from "react-router-dom";
import LeftPannel from "./LeftPannel";
import RightPannel from "./RightPannel";
import TopPanel from "./TopPanel";
import './Admin.css';
const AdminLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { AdminUserName, setAdminUserName } = useContext(MyAdminContext);
  const isTokenSet = Cookies.get("AdminToken") || undefined;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      if (!isTokenSet) {
        console.log("Token is not set");
        window.location.href = "/Adminlogin";
        return; // Exit early if no token
      }

      const AdminToken = Cookies.get("AdminToken");
      const decodeToken = (token) => {
        if (!AdminToken) return null;
        const base64Url = AdminToken.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const decodedToken = JSON.parse(atob(base64));
        return decodedToken;
      };

      const userInfo = decodeToken(AdminToken);

      try {
        const response = await axios.get(
          `http://localhost:4000/admin/AdminLogin/${userInfo.AdminId}`
        );
        setAdminUserName(response.data.user);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err); // Store error for handling (e.g., display error message)
      } finally {
        setIsLoading(false); // Set loading state to false after execution
      }
    };

    fetchData();
  }, [isTokenSet]); // Re-run effect only when token changes

  if (isLoading) {
    return <div>Loading...</div>; // Display loading indicator while data fetches
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Handle errors gracefully (e.g., display error message)
  }
  return (
    <>
      <section className="adminController" >
        <TopPanel />
       <div className="admiwrapper">
       <LeftPannel />
        <RightPannel>   
          {/* <Outlet /> */}
        </RightPannel>
       </div>

        
       
      </section>
    </>
  );
};

export default AdminLayout;
