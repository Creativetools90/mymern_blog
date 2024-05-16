import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const Signup = () => {
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData);
        try {
            await axios
              .post("http://localhost:4000/api/signup", user)
              .then((res) => {
                toast.success(res.data.msg, {
                  position: "top-right",
                  duration: 900,
                });
                navigate("/login");
              })
              .catch((err) => {
                // toast.error(err.response.data.msg, {
                //   position: "top-right",
                //   duration: 900,
                // });
                console.log(err);
                
              });
          } catch (e) {
            console.log("error", e);
          }
        
      };
  return (
    <div className="manageForm">
      <h2>register</h2>
      <form onSubmit={handleLogin} >
        <div className="lab_group">
          <label htmlFor="user">user</label>
          <input
            type="text"
            name="user"
            required
            id="user"
            placeholder="enter username"
          />
        </div>
        <div className="lab_group">
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            required
            id="email"
            placeholder="enter email"
          />
        </div>
        <div className="lab_group">
          <label htmlFor="pass">pass</label>
          <input
            type="text"
            name="pass"
            required
            id="pass"
            placeholder="enter pass"
          />
        </div>
        <div className="get">
          <button>resigter</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
