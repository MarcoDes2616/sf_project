import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import MenuItem from "../generals/MenuItem";

const Menu = () => {
  const { menuOptions } = useContext(MainContext)


  return (
      <div className="navbar_menu_internal_container full-h flex row al-c s_family">
        <div className="navbar_menu_links flex row">
          {menuOptions.map((item, i) => (
            <MenuItem item={item} key={i} />
          ))}
        </div>
        {/* <i className='bx bx-menu bx-md' /> */}
      </div>
  );
};

export default Menu;
