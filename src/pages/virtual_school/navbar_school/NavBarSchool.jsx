import React, { useEffect, useState } from 'react';
import { Toolbar, Tabs, Tab } from '@mui/material';
import { School, Public, Person, AdminPanelSettings, Logout } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import authService from '../../../services/authServices';

export default function NavBarSchool() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detecta si es mobile

  useEffect(() => {
    const roleId = localStorage.getItem('roleId');
    setIsAdmin(roleId === "1");

    switch (location.pathname) {
      case '/virtual_school/my_courses':
        setSelectedTab(0);
        break;
      case '/virtual_school/free':
        setSelectedTab(1);
        break;
      case '/virtual_school/profile':
        setSelectedTab(2);
        break;
      case '/virtual_school/admin':
        setSelectedTab(3);
        break;
      default:
        setSelectedTab(10)
        break
    }
  }, [location.pathname]);

  const handleTabChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate('/virtual_school/my_courses');
        break;
      case 1:
        navigate('/virtual_school/free');
        break;
      case 2:
        navigate('/virtual_school/profile');
        break;
      case 3:
        navigate('/virtual_school/admin');
        break;
      default:
        break
    }
  };

  return (
    <div className="appBar full-vw">
      <Toolbar className="toolbar">
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant='scrollable'
        >
          <Tab icon={ <School />} label={isMobile ? '' : 'MIS CURSOS'} />
          <Tab icon={ <Public />} label={isMobile ? '' : 'CONTENIDO PUBLICO'} />
          <Tab icon={ <Person />} label={isMobile ? '' : 'PERFIL'} />

          {isAdmin && (
            <Tab
              icon={ <AdminPanelSettings /> }
              label={isMobile ? '' : 'ADMINISTRACIÓN'}
            />
          )}
        </Tabs>
        <div onClick={authService.actionLogout}>
          <Tab icon={ <Logout />} label={isMobile ? '' : 'Salir'} />
        </div>
      </Toolbar>
    </div>
  );
}
