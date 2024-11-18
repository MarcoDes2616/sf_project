import React from "react";
import "./metrics.css";
import MetricCards from "./utils/MetricCards";

const Metrics = () => {
    const dataCards = [
        {
          numberTitle: 5,
          numberDetail: "+",
          description: "Años de Experiencia haciendo trading",
        },
        {
          numberTitle: 85,
          numberDetail: "%",
          description: "de nuestros estudiantes mejoraron sus resultados de trading",
        },
        {
          numberTitle: 92,
          numberDetail: "%",
          description: "de nuestros usuarios nos califican nuestro servicio como excelente!",
        },
        {
          numberTitle: 1000,
          numberDetail: "+",
          description: "Traders confían en nosotros para mejorar sus habilidades y estrategias de trading",
        },
      ];
  return (
    <div className="metrics_container">
      <div className="metrics_info_container flex column autoM">
        <div className="metrics_first_section flex column full-w al-c">
            <h3 className="bold xx-big">Aprende con Expertos</h3>
            <p className="x-big">y comienza a hacer trading desde hoy!</p>
        </div>
        <div className="metrics_second_sectión flex row wrap full-w jf-c">
          {dataCards.map((object, i) => (
            <MetricCards key={i} {...object} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
