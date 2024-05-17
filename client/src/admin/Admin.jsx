import React from "react";
import LeftPannel from "./LeftPannel";
import RightPannel from "./RightPannel";
import { Route, Routes } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin ">
      <LeftPannel />
      <RightPannel />
      
    </div>
  );
};

export default Admin;
