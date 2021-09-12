import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import LogoNav from "../../img/logo.svg";
//import Logo from "../../img/logo.png";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    navegador();
  });
  const navegador = () => {
    var navScr = document.getElementById("navScr");
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 30 ||
        document.documentElement.scrollTop >= 30
      ) {
        navScr.classList.add("nav-colored");
        navScr.classList.remove("nav-transparent");
      } else {
        navScr.classList.add("nav-transparent");
        navScr.classList.remove("nav-colored");
      }
    };
  };

  return (
    <nav id="navScr" className="navbar ">
      <Link to="/" className="navbar_logo" onClick={closeMobileMenu}>
        <img src={LogoNav} alt="Carlos Boyzo Oregon" />
        <span> </span>
      </Link>
      <ul className={click ? "navbar_menu active " : "navbar_menu"}>
        <Link to="work" className="navbar_menu_link" onClick={closeMobileMenu}>
          <li> Work </li> {/* {dropdown && <Dropdown />} */}
        </Link>
        <Link to="about" className="navbar_menu_link" onClick={closeMobileMenu}>
          <li> About </li>
        </Link>

        <Link
          to="resume-design"
          className="navbar_menu_button navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li> CV </li>
        </Link>
        <Link
          to="contact"
          className="navbar_menu_button navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li> Contact </li>
        </Link>
      </ul>
      <div className="navbar-icon" onClick={handleClick}>
        {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
