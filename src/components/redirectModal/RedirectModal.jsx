import React, { useContext } from "react";
import Curtain from "../generals/Curtain";
import MainContext from "../../context/MainContext";
import logoV from "/logo_peq.png";
import YellowBtn from "../generals/YellowBtn";
import PrimaryBtn from "../generals/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const RedirectModal = () => {
  const { openRedirectModal, setOpenRedirectModal } = useContext(MainContext);
  const navigate = useNavigate()

  const toggleModal = () => {
    setOpenRedirectModal(!openRedirectModal)
  }

  const handdleRedirect = () => {
    toggleModal()
    navigate("/virtual_school/my_courses")
  }
  
  return (
    <Curtain open={openRedirectModal}>
      <div className="redirect_modal_info jf-c flex row wrap">
        <div className="redirect_section redirect1 flex column al-c jf-c">
            <img src={logoV} alt="logo trading sin fronteras" />
            <p className="x-big" style={{marginBottom: "20px"}}>Continuar en la Web</p>
            <YellowBtn btnAction={toggleModal}>Explorar web</YellowBtn>
        </div>
        <div className="redirect_section redirect2 flex column al-c jf-c">
            <p className="x-big center">El mercado recompensa!, cada operación es el resultado de estudio, disciplina y conocimiento.</p>
            <h2 className="center">Bienvenidos a la academia!</h2>
            <PrimaryBtn btnAction={handdleRedirect}>ESCUELA VIRTUAL</PrimaryBtn>
        </div>
      </div>
    </Curtain>
  );
};

export default RedirectModal;
