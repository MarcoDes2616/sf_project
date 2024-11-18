import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
import Swal from "sweetalert2";
import MainContext from "../../context/MainContext";

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
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.password != data.confirmPassword) {
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
