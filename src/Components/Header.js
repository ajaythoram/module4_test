import React from "react";
import { FaHome, FaUser, FaBell,FaBookmark } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <p>TravelMedia.in</p>
      <div id="icons">
      <FaHome />
      <FaBell />
        <FaBookmark />
        <FaUser />
       
      </div>
    </div>
  );
}

export default Header;
