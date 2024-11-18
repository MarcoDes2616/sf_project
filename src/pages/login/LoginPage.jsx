import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Curtain from "../../components/generals/Curtain";
import Login from "./Login";
import MainContext from "../../context/MainContext";
import "./login.css"
import { Button } from "@mui/material";

const initialValues = { email: "", password: "" }

function LoginPage() {
  const { setOpenModalLogin, openModalLogin, login, fetchRequestReset, setOpenRedirectModal } =
    useContext(MainContext);

  const [formData, setFormData] = useState(initialValues);
  const [state, setState] = useState(0);
  const navigate = useNavigate();

  const handdleFinally = () => {
    setState(0)
    setFormData(initialValues)
    setOpenModalLogin(false)
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const {status, data} = await login(formData);
      if (status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify(
            data.user.name + " " + data.user.lastname
          )
        );
        localStorage.setItem("roleId", data.user.roleId);
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
        <h1>Login Page</h1>
        <Login
          setFormData={setFormData}
          formData={formData}
          state={state}
          setState={setState}
        />
        <Button 
          disabled={(formData.email && formData.password) == ""} 
          onClick={state == 0 ? handleLogin : requestReset} 
          variant="outlined"
          className="flex center autoM"
          color="primary">
          {state == 0 ? "Ingresar" : "Enviar"}
        </Button>
      </div>
    </Curtain>
  );
}

export default LoginPage;
