import IndexHome from "./pages/IndexHome";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/adminLogin/AdminLogin";
import AdminSatup from "./admin/adminLogin/AdminSatup";
import AdminPost from "./admin/AdminPost";
import Setting from "./admin/Setting";
import CreatePost from "./admin/CreatePost";
import UpdatePost from "./admin/UpdatePost";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexHome />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="adminpost" element={<AdminPost/>} />  
          <Route path="adminsetting" element={<Setting/>} />  
          <Route path="createpost" element={<CreatePost/>} />  
          <Route path="updatepost" element={<CreatePost/>} />  
        </Route>
        <Route path="/Adminlogin" element={<AdminLogin />} />
        <Route path="/AdminSatup" element={<AdminSatup />} />
      </Routes>
    </>
  );
}

export default App;
