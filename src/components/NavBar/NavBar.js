import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import * as FaIcons from "react-icons/fa";
import LogoNav from "../../img/logo.svg";
import { HashLink } from "react-router-hash-link";
import { FormattedMessage } from "react-intl";
import { LangContext } from "../../context/LangContext";
import emoji from "react-easy-emoji";
//import Logo from "../../img/logo.png";
function Navbar() {
  const [click, setClick] = useState(false);
  const idioma = useContext(LangContext);
  //const lang = localStorage.getItem("lang");
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
        <HashLink
          to="#agenda"
          className="navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li>
            {" "}
            <FormattedMessage id="menu.agenda" />
          </li>
        </HashLink>
        <HashLink
          to="#salas"
          className="navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li>
            {" "}
            <FormattedMessage id="menu.rooms" />{" "}
          </li>
        </HashLink>

        <Link
          to="#contact"
          className="navbar_menu_button navbar_menu_link"
          onClick={closeMobileMenu}
        >
          <li>
            {" "}
            <FormattedMessage id="menu.contact" />{" "}
          </li>
        </Link>

        <Link to="contact" onClick={logout}>
          <li className=" btn-nav"> Logout </li>
        </Link>

        <div className="contenedor-botones-lang">
          <li onClick={() => idioma.establecerLenguaje("es")}>
            {" "}
            {emoji("🇲🇽 esp")}
          </li>

          <li onClick={() => idioma.establecerLenguaje("en")}> 🇺🇸 eng</li>
        </div>
      </ul>
      <div className="navbar-icon" onClick={handleClick}>
        {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
