import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MainContext from '../context/MainContext';

const RenderControl = () => {
    const { setIsWeb } = useContext(MainContext);

  useEffect(() => {
    setIsWeb(true);
  }, []);

    return (
        <Outlet />
    );
};

export default RenderControl;