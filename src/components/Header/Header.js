import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user_anjali.webp";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Mobile App</div>
      </Link>

      <div className="user-img">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header;
