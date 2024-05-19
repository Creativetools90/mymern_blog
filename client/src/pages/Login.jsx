import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
const Login = () => {
    const navigate = useNavigate();
    const handleInput = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData);
        try {
          await axios
            .post("http://localhost:4000/api/login", userData)
            .then((res) => {
              toast.success(res.data.msg, {
                position: "top-right",
                duration: 900,
              });
              window.location.href = "/";
              const token = res.data.token;
              Cookies.set("token", token);
            })
            .catch((err) => {
             
              toast.error(err.response.data.msg, {
                position: "top-right",
                duration: 900,
              });
            
            });
        } catch (e) {
          console.log("error");
        }
      };
  return (
    <div className="manageForm">
      <h2>login</h2>
      <form onSubmit={handleInput} >
        <div className="lab_group">
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="enter email"
          />
        </div>
        <div className="lab_group">
          <label htmlFor="pass">pass</label>
          <input type="text" name="pass" id="pass" placeholder="enter pass" />
        </div>
        <div className="get">
          <button type="submit">login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
