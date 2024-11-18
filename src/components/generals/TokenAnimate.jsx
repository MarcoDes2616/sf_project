import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TokenAnimate = ({children}) => {
    const token = localStorage.getItem("token")
    const {pathname} = useLocation()
    const [className, setClassName] = useState(false)
    useEffect(() => {
        setClassName(token && !(pathname.includes("/virtual_school")))
    }, [pathname])
    return (
        <div className={className ? "virtual_scholl_btn" : ""}>
            {children}
        </div>
    );
};

export default TokenAnimate;