import React from "react";
import "./proposal.css";
import phone from "/phone.png";
import PrimaryBtn from "../generals/PrimaryBtn";

const ProposalSection = () => {
  return (
    <div className="proposal_container full-vw flex jf-c al-c">
      <div className="proposal_info flex full-w full-h autoM jf-sb al-c">
        <div className="flex column proposal_section1 full-h">
          <div className="flex al-c proposal_description1">
            <h2 className="text_proposal big regular_w">
              <span>CURSO DE TRADING</span> Aprenda cómo operan los mercados y
              desarrollé una estrategia avanzada y rentable.
            </h2>
          </div>
          <div className="flex proposal_description2">
            <div className="flex row proposal_price">
              <h3 className="bold">120$</h3>
              <p className="big">Único pago por el curso Indice sintético</p>
            </div>
            <PrimaryBtn scroll={700}>Inscripciones Abiertas</PrimaryBtn>
          </div>
          <div className="flex column wrap proposal_description3 full-w regular">
            <p className="x-big bold">Suscripción Incluye:</p>
            <div className="flex row wrap jf-sb big">
              <div className="flex column subcription_section1">
                <ul>
                  <li>Acceso de por vida al material del curso.</li>
                  <li>Clases en vivo dos veces por semana durante 3 meses</li>
                  <li>
                    Acceso al canal VIP por 3 Meses de señales gratis para
                    probar la efectividad de la academia,
                  </li>
                  <li>
                    Asesoría y acompañamiento por 3 meses una vez inscrito. Con
                    las actualizaciones, cada vez que ocurra!!
                  </li>
                </ul>
              </div>
              <div className="flex column subcription_section2">
                <ol>
                  <li>
                    Pensum de estudio completo, Videos con estrategia de Trading
                    sin frontera.
                  </li>
                  <li>Diario de trading</li>
                  <li>Plan de trading</li>
                  <li>Plantilla de gestión de riesgos</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="flex column proposal_section2 flex row al-c full-h">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default ProposalSection;
