import "./App.css";
import IndexHome from "./pages/IndexHome";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<IndexHome/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
