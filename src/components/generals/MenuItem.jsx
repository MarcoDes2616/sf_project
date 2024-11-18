import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MainContext from '../../context/MainContext';

const MenuItem = ({item, i}) => {
    const {handleScrollToTop} = useContext(MainContext)
    return (
        <NavLink to={item.path} className={({ isActive, isPending }) =>
            isActive ? "btn_app link bold big link_active" : "btn_app link bold big link_inactive"}
            onClick={handleScrollToTop}
            >
            {item.name}
        </NavLink>
    );
};

export default MenuItem;