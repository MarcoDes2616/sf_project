import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Typography, Box, List, ListItem } from "@mui/material";
import Swal from "sweetalert2";
import MainContext from "../../context/MainContext";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const PasswordRequirement = ({ isValid, text }) => (
  <ListItem sx={{ padding: '2px 0' }}>
    {isValid ? (
      <CheckCircleOutlineIcon color="success" sx={{ mr: 1 }} />
    ) : (
      <CancelOutlinedIcon color="error" sx={{ mr: 1 }} />
    )}
    <Typography
      variant="body2"
      color={isValid ? "success.main" : "error.main"}
    >
      {text}
    </Typography>
  </ListItem>
);

const ResetPassword = () => {
  const { tokenReset } = useParams();
  const [data, setData] = useState({ password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { fetchUpdatePass } = useContext(MainContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  
  const validatePassword = (password) => {
    const validations = {
      length: password.length >= 8,
      upperCase: /[A-Z]/.test(password),
      number: /\d/.test(password)
    };

    const errorMessages = [];
    if (!validations.length) errorMessages.push("- Mínimo 8 caracteres");
    if (!validations.upperCase) errorMessages.push("- Al menos una mayúscula");
    if (!validations.number) errorMessages.push("- Al menos un número");

    return {
      isValid: Object.values(validations).every(v => v),
      message: errorMessages.join('\n')
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const validation = validatePassword(data.password);
    if (!validation.isValid) {
      setError("La contraseña debe contener:\n" + validation.message);
      return;
    }
    
    if (data.password !== data.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const {status} = await fetchUpdatePass(data.password, tokenReset);
      if (status === 201) {
        Swal.fire({
          title: "Cambio de contraseña realizado correctamente",
          icon: "success",
          confirmButtonColor: "#F89C2A",
          toast: true,
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Hubo un error, reintente el cambio de contraseña",
        icon: "error",
        confirmButtonColor: "#F89C2A",
        toast: true,
      }).then(() => {
        navigate("/");
      });
    }
  };

  const passwordChecks = {
    length: data.password.length >= 8,
    upperCase: /[A-Z]/.test(data.password),
    number: /\d/.test(data.password)
  };

  return (
    <div className="reset_password_container full-vh full-vw flex jf-c al-c">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="reset_form_box"
      >
        <Typography variant="h4" gutterBottom>
          Restablecer Contraseña
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          gap={2}
          width="100%"
          maxWidth="400px"
        >
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            fullWidth
          />
          
          <List sx={{ mt: -1, mb: -1 }}>
            <PasswordRequirement 
              isValid={passwordChecks.length}
              text="Mínimo 8 caracteres"
            />
            <PasswordRequirement 
              isValid={passwordChecks.upperCase}
              text="Al menos una mayúscula"
            />
            <PasswordRequirement 
              isValid={passwordChecks.number}
              text="Al menos un número"
            />
          </List>

          <TextField
            label="Confirmar Contraseña"
            variant="outlined"
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
            fullWidth
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary">
            Cambiar Contraseña
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ResetPassword;
