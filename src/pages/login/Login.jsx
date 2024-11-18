import React from "react";
import { TextField, InputAdornment, Button } from "@mui/material";

const Login = ({ formData, setFormData, state, setState }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <TextField
        label="Correo"
        name="email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">@example.com</InputAdornment>
          ),
        }}
        fullWidth
        margin="normal"
      />

      {state === 1 && (
        <Button onClick={() => setState(0)} variant="text" color="primary">
          Volver al inicio de sesión
        </Button>
      )}
      <br />

      {state === 0 && (
        <>
          <TextField
            label="Contraseña"
            type="password"
            name="password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">***</InputAdornment>
              ),
            }}
            fullWidth
            margin="normal"
          />
          <Button onClick={() => setState(1)} variant="text" color="primary">
            Olvidé mi contraseña
          </Button>
        </>
      )}
      <br />
    </div>
  );
};

export default Login;
