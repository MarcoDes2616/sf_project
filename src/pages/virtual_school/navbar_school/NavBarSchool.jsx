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
    // Comprobar roleId en localStorage
    const roleId = localStorage.getItem('roleId');
    setIsAdmin(roleId === '1');

    // Actualizar la pestaña seleccionada según la ruta actual
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
        setSelectedTab(0);
    }
  }, [location.pathname]);

  // Función para manejar la navegación y cambiar la pestaña activa
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
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
        navigate('/virtual_school/my_courses');
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
          {/* Pestañas que cambian entre iconos o texto según sea escritorio o móvil */}
          <Tab icon={ <School />} label={isMobile ? '' : 'MIS CURSOS'} />
          <Tab icon={ <Public />} label={isMobile ? '' : 'CONTENIDO PUBLICO'} />
          <Tab icon={ <Person />} label={isMobile ? '' : 'PERFIL'} />

          {/* Pestaña de administración solo para roleId 1 */}
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
