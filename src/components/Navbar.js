import React from "react";
import "./Navbar.css";
import {
  RiBookOpenLine,
  RiCopyrightLine,
  RiHeartLine,
  RiHomeSmileLine,
  RiImageEditLine,
  RiLineChartLine,
  RiPencilLine,
  RiUser2Line,
} from "@remixicon/react";
const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="Nav__icon">
          <RiHomeSmileLine className="remix" />
          <a href="/">Home</a>
        </div>
        <div className="Nav__icon">
          <RiUser2Line className="remix" />
          <a href="/">User Photos</a>
        </div>
        <div className="Nav__icon">
          <RiBookOpenLine className="remix" />
          <a href="/">Documentation</a>
        </div>
        <div className="Nav__icon">
          <RiPencilLine className="remix" />
          <a href="/">Change Log</a>
        </div>
        <div className="Nav__icon">
          <RiLineChartLine className="remix" />
          <a href="/">Stats & Graphs</a>
        </div>
        <div className="Nav__icon">
          <RiHeartLine className="remix" />
          <a href="/">Donate</a>
        </div>
        <div className="Nav__icon">
          <RiCopyrightLine className="remix" />
          <a href="/">Copyright Notice</a>
        </div>
        <div className="Nav__icon">
          <RiImageEditLine className="remix" />
          <a href="/">Photoshop Extension</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
