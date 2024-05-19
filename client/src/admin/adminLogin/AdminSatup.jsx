import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import NotValidRoute from "../../error/NotValidRoute";
const AdminSatup = () => {
  const [ActiveSatupBar, setActiveSatupBar] = useState("off"); // set on and off state to active
  const Navigation = useNavigate();
  const handleSatup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);
    const UserEntry = {
      user: user.user,
      pass: user.pass,
      email: user.email,
    };
    if (user.confirm_pass === user.pass) {
      axios
        .post("http://localhost:4000/admin/AdminSatup", UserEntry)
        .then((res) => {
           Navigation('/Adminlogin');
          toast.success(res.data.msg, {
            position: "top-right",
            duration: 900,
          });
        })
        .catch((e) => {
          console.log("err", e);
        });
    } else {
      toast.success("password is not match", {
        position: "top-right",
        duration: 900,
      });
    }
  };
  if (ActiveSatupBar === "on") {
    return (
      <>
        <div className="wrape">
          <div className="adminLogContainer">
            <h2>Admin Satup</h2>
            <form onSubmit={handleSatup}>
              <input type="text" name="user" placeholder="Enter username" />
              <input type="password" name="pass" placeholder="Enter pass" />
              <input
                type="text"
                name="confirm_pass"
                placeholder="Enter confirm pass"
              />
              <input type="email" name="email" placeholder="Enter email" />
              <button type="submit">submit</button>
              <Link to="/Adminlogin">Already have account</Link>
            </form>
          </div>
        </div>
      </>
    );
  }
  else{
    return(
      <>
      <NotValidRoute/>
      </>
    )
  }
};

export default AdminSatup;
