import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../../context/MainContext';

const PrimaryBtn = ({btnAction, scroll, link, children}) => {
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
        <button className='primary_btn big btn_app flex al-c jf-c s_family' onClick={handleOnClick}>
            {children}
        </button>
    );
};

export default PrimaryBtn;