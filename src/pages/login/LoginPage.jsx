import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Curtain from "../../components/generals/Curtain";
import Login from "./Login";
import MainContext from "../../context/MainContext";
import "./login.css"
import { Button } from "@mui/material";

const initialValues = { email: "", password: "" }
const initialErrors = { 
  email: { error: false, message: "" }, 
  password: { error: false, message: "" }
};

function LoginPage() {
  const { setOpenModalLogin, openModalLogin, login, fetchRequestReset, setOpenRedirectModal } =
    useContext(MainContext);

  const [formData, setFormData] = useState(initialValues);
  const [state, setState] = useState(0);
  const navigate = useNavigate();
  const [errors, setErrors] = useState(initialErrors);

  const handdleFinally = () => {
    setState(0)
    setFormData(initialValues)
    setOpenModalLogin(false)
  }

  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(formData.email);
    const isPasswordValid = formData.password.length >= 8;
    
    setErrors({
      email: {
        error: !isEmailValid,
        message: !isEmailValid ? "Correo no válido" : ""
      },
      password: {
        error: state === 0 && !isPasswordValid,
        message: state === 0 && !isPasswordValid ? "La contraseña debe tener al menos 8 caracteres" : ""
      }
    });
    
    if (state === 0) {
      return isEmailValid && isPasswordValid;
    }
    return isEmailValid;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    
    if (!validateFields()) return;

    try {
      const {status, data} = await login(formData);
      if (status === 200) {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem(
          "user",
          JSON.stringify(
            data.user.name + " " + data.user.lastname
          )
        );
        localStorage.setItem("roleId", JSON.stringify(data.user.roleId));
      }
      setOpenRedirectModal(true)
    } catch (error) {      
      Swal.fire({
        title: "Usuario no encontrado, desactivado, o error de credenciales",
        icon: "error",
        confirmButtonColor: "#F89C2A",
        toast: true,
      }).then(() => {
        navigate("/");
      });
    } finally {
      handdleFinally()
    }
  };

  const requestReset = async (event) => {
    event.preventDefault();
    
    if (!validateFields()) return;

    formData.frontBaseUrl = `${window.location.origin}/#/reset_password`;
    try {
      const response = await fetchRequestReset(formData);
      if (response.status === 200) {
        Swal.fire({
          title: "Se ha enviado un correo con las intrucciones de recuperación",
          icon: "success",
          confirmButtonColor: "#F89C2A",
          toast: true,
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      alert(error);
    } finally {
      handdleFinally()
    }
  };

  return (
    <Curtain open={openModalLogin}>
      <div className="login_container flex jf-c column al-c relative">
        <i
          className="bx bx-x bx-sm btn_app"
          onClick={handdleFinally}
        ></i>
        <h3>{ currentUser ? "Iniciar sesión" : "Restablecer contraseña" }</h3>
        <form onSubmit={state === 0 ? handleLogin : requestReset} className="flex column al-c jf-c">
          <Login
            setFormData={setFormData}
            formData={formData}
            state={state}
            setState={setState}
            errors={errors}
          />
          <Button 
            type="submit"
            variant="outlined"
            className="flex center autoM"
            color="primary">
            {state == 0 ? "Ingresar" : "Enviar"}
          </Button>
        </form>
      </div>
    </Curtain>
  );
}

export default LoginPage;
