import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";
import Curtain from "./generals/Curtain";

export default function Loading({ loading, message = "Cargando..." }) {
  
  return (
    <Curtain open={loading}>
      <CircularProgress color="primary" /><br /><br />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {message}
      </Typography>
    </Curtain>
  );
}
