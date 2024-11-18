import React, { useContext } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import MainContext from '../../../../context/MainContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../../components/Loading';

export default function Profile() {
  const { userData, getMyProfile } = useContext(MainContext);
  const navigate = useNavigate()
  useEffect(() => {
    fetchData()
  }, []) 

  const fetchData = async() => {
    try {
      await getMyProfile()
    } catch (error) {
      navigate("/")
    }
  }
  
  if (!userData.id) {
    return <Loading loading={!userData.id}/>;
  }

  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', marginTop: 4, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Perfil del Usuario
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Nombre:
            </Typography>
            <Typography variant="body1">{userData.name}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Apellido:
            </Typography>
            <Typography variant="body1">{userData.lastname}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Fecha de Nacimiento:
            </Typography>
            <Typography variant="body1">
              {new Date(userData.birthday).toLocaleDateString()}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Número de Documento:
            </Typography>
            <Typography variant="body1">{userData.documentNumber}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Email:
            </Typography>
            <Typography variant="body1">{userData.email}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Declaración Firmada:
            </Typography>
            <Typography variant="body1">
              {userData.signDeclare ? 'Sí' : 'No'}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Estado:
            </Typography>
            <Typography variant="body1">
              {userData.status ? 'Activo' : 'Inactivo'}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
