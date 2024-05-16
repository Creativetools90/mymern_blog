import React from "react";
import searchBarIcon from "./assets/search.svg";
import twitterIcon from "./assets/twitter.svg";
import facebookIcon from "./assets/facebook.svg";
import instagramIcon from "./assets/instagram.svg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
const Header = () => {
  const isLoggedIn = Cookies.get("token") !== undefined;
  const Token = Cookies.get("token");
  const [verifyUser, setVerifyUser] = useState();
  const logout = () => {
    Cookies.remove("token");
    window.location.href = "/";
  }
  const decodeToken = (token) => {
    if (!Token) return null;
    const base64Url = Token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const decodedToken = JSON.parse(atob(base64));
    return decodedToken;
  };
  const userInfo = decodeToken(Token);
  const req = async () => {
    await axios
      .get(`http://localhost:4000/api/user/${userInfo.userId}`)
      .then((res) => {
        setVerifyUser(res.data.user.user);
      })
      .catch((e) => {
        console.log("err", e);
      });
  };
  req();
  return (
    <header>
      <nav className="navbar">
        <div className="searchBar">
          <div className="searchbar">
            {/* <!-- search img or svg --> */}
            <img src={searchBarIcon} alt="search_icon" />
            <input type="text" placeholder="search" />
          </div>
        </div>
        <div className="logo">
          <Link to="/">
            <h2>mernblog</h2>
          </Link>
        </div>
        <div className="menus">
          <div className="menuList">
            <a href="">
              <img src={twitterIcon} alt="twitter" />
            </a>
            <a href="">
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a href="">
              <img src={instagramIcon} alt="instagram" />
            </a>
          </div>
          <div className="menuBar">
            {isLoggedIn ? (
              <>
               <Link to="signup" className="link l_link">
                  <button className="actionuser log">signup</button>
                </Link>
                <button onClick={logout} className="actionuser logout">logout</button>
              </>
            ) : (
              <>
                <Link to="login" className="link l_link">
                  <button className="actionuser log">login</button>
                </Link>
                <Link to="signup" className="link s_link">
                  <button className="actionuser sign">signup</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
