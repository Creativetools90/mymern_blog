import React, { useState, useEffect , useContext } from "react";
import "./Admin.css";
import "./root.css";
import Admin from "./Admin";
import Cookies from "js-cookie";
import AdminContext from "./AdminContext";
import { MyAdminContext } from "./AdminContext"; // Assuming this is for another context
import axios from "axios";

const AdminLayout = () => {
  // const [verifyUser, setVerifyUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track any errors
  const {AdminUserName ,setAdminUserName} = useContext(MyAdminContext); //set context value 
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
        const response = await axios.get(`http://localhost:4000/admin/AdminLogin/${userInfo.AdminId}`);
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
      
        <Admin/>

    </>
  );
};

export default AdminLayout;
