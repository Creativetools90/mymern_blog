import IndexHome from "./pages/IndexHome";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./admin/Admin";
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/adminLogin/AdminLogin";
import AdminSatup from "./admin/adminLogin/AdminSatup";
import CreatePost from "./admin/AdminPost/CreatePost";
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
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/createPost" element={<CreatePost/>} />
        <Route path="/Adminlogin" element={<AdminLogin />} />
        <Route path="/AdminSatup" element={<AdminSatup />} />
      </Routes>
    </>
  );
}

export default App;
