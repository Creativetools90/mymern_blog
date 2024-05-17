import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminContext from "./admin/AdminContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AdminContext>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </AdminContext>
);
