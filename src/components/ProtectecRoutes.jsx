import { useContext, useEffect } from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import MainContext from '../context/MainContext';

const ProtectedRoutes = () => {
    const token = localStorage.getItem('token');

    if (token) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }

};

export default ProtectedRoutes;