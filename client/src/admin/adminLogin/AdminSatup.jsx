import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const AdminSatup = () => {
    const handleSatup = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData);
        const UserEntry = {
            user:user.user,
            pass:user.pass,
            email:user.email
        }
        if(user.confirm_pass === user.pass){
            axios
           .post("http://localhost:4000/AdminSatup", UserEntry)
           .then((res) => {
             console.log(res.data.msg);
           })
           .catch((e) => {
             console.log("err", e);
           });
        }else{
            console.log("password is wrong")
        }
       
    }
  return (
    <>
     <div className="wrape">
     <div className="adminLogContainer">
        <h2>Admin Satup</h2>
        <form onSubmit={handleSatup} >
          <input type="text" name="user" placeholder="Enter username" />
          <input type="password" name="pass" placeholder="Enter pass" />
          <input type="text" name="confirm_pass" placeholder="Enter confirm pass" />
          <input type="email" name="email" placeholder="Enter email" />
          <button type="submit">submit</button>
          <Link to="/Adminlogin">Already have account</Link>
        </form>
      </div>
     </div>
    </>
  );
};

export default AdminSatup;
