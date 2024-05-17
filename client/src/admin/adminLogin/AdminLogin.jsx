import React from "react";
import "./AdminLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
const AdminLogin = () => {
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);
    try {
      await axios
        .post("http://localhost:4000/admin/Adminlogin", user)
        .then((res) => {
          toast.success(res.data.msg, {
            position: "top-right",
            duration: 900,
          });
          const AdminLoginToken = res.data.Admintoken;
          Cookies.set("AdminToken",AdminLoginToken);
          window.location.href = "/admin";
         
        })

        .catch((e) => {
          toast.error(e.response.data.msg, {
            position: "top-right",
            duration: 900,
          });
        });
    } catch (e) {
      console.log("err", e);
    }
  };
  return (
    <>
      <div className="wrape">
        <div className="adminLogContainer">
          <h2>Admin Login</h2>
          <form onSubmit={handleAdminLogin}>
            <input type="text" name="user" placeholder="username" />
            <input type="password" name="pass" placeholder="********" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
