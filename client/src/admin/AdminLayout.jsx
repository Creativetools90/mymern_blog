import React from 'react'
import "./Admin.css";
import { Outlet } from "react-router-dom";
import './root.css';
const AdminLayout = () => {
  return (
    <Outlet/>
  )
}

export default AdminLayout