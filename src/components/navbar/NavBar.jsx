import React, { useContext, useState } from "react";
import Menu from "./Menu";
import "./navbar.css";
import logoH from "/logo_h.png";
import logoV from "/logo.png";
import PrimaryBtn from "../generals/PrimaryBtn";
import MainContext from "../../context/MainContext";
import MenuItem from "../generals/MenuItem";
import { useNavigate } from "react-router-dom";
import TokenAnimate from "../generals/TokenAnimate";

const NavBar = () => {
  const { icons, menuOptions, setOpenModalLogin } =
    useContext(MainContext);
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  
  const [menuOpen, setMenuOpen] = useState(false);

  const handdleActionsIconUser = (string) => {
    if (token) {
      navigate(`/virtual_school/${string}`)
    } else {
      setOpenModalLogin(true)
    }
  }

  return (
    <div className="navbar_container full-vw flex row">
      <div className="navbar_logo_container full-h flex">
        <img src={logoH} alt="logo tradinf sin fronteras" />
      </div>
      <div className="navbar_menu_container al-c">
        <Menu />
        <TokenAnimate>
          <PrimaryBtn btnAction={() => handdleActionsIconUser("my_courses")}>ESCUELA VIRTUAL</PrimaryBtn>
        </TokenAnimate>
      </div>
      <div className="navbar_icon_container flex row jf-sb al-c">
        {icons.map((item, i) => (
          <a
            key={i}
            href={item.path}
            target="_blank"
            className="flex jf-c al-c"
          >
            {item.icon}
          </a>
        ))}
        <i
          className={`bx bx-user flex jf-c al-c btn_app ${token && "user_loged"}`}
          onClick={() => handdleActionsIconUser("profile")}
        />
      </div>
      <div className="menu_access" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="bx bx-menu" />
      </div>
      <div
        className={`flex column mobile_menu al-c ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          className="logo_header autoM"
          src={logoV}
          alt="logo trading sin fronteras"
        />
        <div className="flex column center">
          {menuOptions.map((item, i) => (
            <MenuItem item={item} key={i} />
          ))}
        </div>
        <br />
        <br />
        <PrimaryBtn>ESCUELA VIRTUAL</PrimaryBtn>
      </div>
    </div>
  );
};

export default NavBar;
