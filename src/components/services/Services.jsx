import React from "react";
import "./services.css";
import logoV from "/logo.png";
import service1 from "/service1.png";
import service2 from "/service2.png";
import service3 from "/service3.png";
import service4 from "/service4.png";

const Services = () => {
    const services = [
        {
          imgSrc: service1,
          altText: "logo services",
          title: "Salas de Trading en Vivo",
          description: "Programa de entrenamiento que incluye operativa en vivo."
        },
        {
          imgSrc: service2,
          altText: "logo services",
          title: "Comunidad de Trading",
          description: "Full acceso a grupos privados con información de calidad en tiempo real."
        },
        {
          imgSrc: service3,
          altText: "logo services",
          title: "Coaching 1 a 1",
          description: "Acompañamiento personalizado en la modalidad trader a trader."
        },
        {
          imgSrc: service4,
          altText: "logo services",
          title: "Acceso de por vida",
          description: "Acceso a los cursos que adquieras, cada vez que desees."
        }
      ];
      
      
  return (
    <div className="services_container">
      <div className="services_info full-h jf-c flex row wrap al-c">
        <div className="services_section1 flex jf-c al-c">
          <img src={logoV} alt="logo trading sin fronteras" />
        </div>
        <div className="services_section2 flex row wrap jf-c al-c">
          <h3 className="regular_w">Entrenamiento y Acompañamiento</h3>
          {services.map((service, index) => (
              <div key={index} className={`services_item${index + 1} flex column al-c`}>
                <img src={service.imgSrc} alt={service.altText} />
                <p className="x-big bold">{service.title}</p>
                <span className="big regular_w">{service.description}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
