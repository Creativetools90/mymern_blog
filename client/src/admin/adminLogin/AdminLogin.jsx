import React from "react";
import "./AdminLogin.css";
const AdminLogin = () => {
  return (
    <>
      <div className="wrape">
        <div className="adminLogContainer">
          <h2>Admin Login</h2>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="********" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
