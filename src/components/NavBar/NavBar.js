import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
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
  const cookies = new Cookies();
  function logout() {
    cookies.remove("message");
    cookies.remove("rooms");
    window.location.href = "./";
    localStorage.clear();
    localStorage.setItem("lang", "en");

    console.log("borrar");
  }

  return (
    <nav id="navScr" className="navbar ">
      <Link to="/landing" className="navbar_logo" onClick={closeMobileMenu}>
        <img src={LogoNav} alt="Baxter distribuidores 2021" />
        <span> </span>
      </Link>
      <ul className={click ? "navbar_menu active " : "navbar_menu"}>
        <Link
          to="landing"
          className="navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li> Agenda</li> {/* {dropdown && <Dropdown />} */}
        </Link>
        <Link
          to="landing"
          className="navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li> Salas </li>
        </Link>

        <Link
          to="contact"
          className="navbar_menu_button navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li> Contacto </li>
        </Link>

        <Link
          to="contact"
          className="navbar_menu_button navbar_menu_link btn-lang"
          onClick={logout}
        >
          <li> Logout </li>
        </Link>
      </ul>
      <div className="navbar-icon" onClick={handleClick}>
        {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
