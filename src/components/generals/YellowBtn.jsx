import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../../context/MainContext';

const YellowBtn = ({btnAction, scroll, link, children}) => {
    const {handleCustomScroll} = useContext(MainContext)
    const navigate = useNavigate()

    const handleNavigate = () => {
        if (link.startsWith("http")) {
            window.location.href = link;
        } else {
            navigate(link);
        }
    };

    const handleOnClick = () => {
        if (link != null) {
            handleNavigate();
        } else if (scroll != null) {
            handleCustomScroll(scroll);
        } else {
            btnAction()
        }
    };
    return (
        <button className='yellow_btn big bold btn_app flex al-c jf-c s_family' onClick={handleOnClick}>
            {children}
        </button>
    );
};

export default YellowBtn;