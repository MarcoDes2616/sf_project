import React, { useContext } from "react";
import "./footer.css";
import logoV from "/logo.png";
import MainContext from "../../context/MainContext";
import PrimaryBtn from "../generals/PrimaryBtn";
import MenuItem from "../generals/MenuItem";

const FooterSection = () => {
  const { handleScrollToTop, menuOptions, icons } = useContext(MainContext);

  return (
    <>
      <div className="footer_container">
        <div className="footer_info flex row al-c jf-c full-w autoM flex row wrap">
          <div className="services_section1 flex jf-c al-c full_w autoM">
            <img src={logoV} alt="logo trading sin fronteras" />
          </div>
          <div className="footer_second_section flex column  s_family">
            <div className="footer_menu_items">
              {menuOptions.map((item, i) => (
                <MenuItem item={item} key={i} />
              ))}
            </div>
            <div className="flex row jf-c">
              <PrimaryBtn>ESCUELA VIRTUAL</PrimaryBtn>
            </div>
          </div>
          <div className="footer_link">
            <div className="navbar_icon_container flex row jf-sb autoM ">
              {icons.slice(0, 3).map((item, i) => (
                <a
                  key={i}
                  href={item.path}
                  target="_blank"
                  className="flex jf-c al-c"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="flex column">
              <a
                className="flex row x-big"
                href="https://t.me/Tradingsinfrontera"
                target="_blank"
              >
                <i className="bx bxl-telegram bx-md" />
                <p>@Tradingsinfrontera</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_last_section full-w flex jf-c al-c relative autoM">
        <p>© 2024 Trading sin fronteras. Todos los derechos reservados.</p>
        <button
          className="to_top_btn btn_app absolute"
          onClick={handleScrollToTop}
        >
          <i className="bx bx-chevrons-up bx-md" />
        </button>
      </div>
    </>
  );
};

export default FooterSection;
