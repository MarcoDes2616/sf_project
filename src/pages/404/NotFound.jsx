import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Box className="full-vh full-vw flex jf-c al-c" textAlign="center">
      <Box>
        <Typography variant="h2" gutterBottom>
          404 - Página no encontrada
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lo sentimos, la página que buscas no existe.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoBack}>
          Volver al inicio
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
