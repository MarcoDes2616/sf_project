import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTriggerReplacement from "./ScrollTriggerReplacement";

const MetricCards = ({ numberTitle, description, numberDetail }) => {
  const [countOn, setCountOn] = useState(false);
  return (
    <div className="metric_card_container flex column al-c">
      <h5 className="xx-big">
        <ScrollTriggerReplacement
          onEnter={() => setCountOn(true)}
          onExit={() => setCountOn(false)}
        >
          {countOn && <CountUp start={numberTitle - (numberTitle * 0.9)} end={numberTitle} duration={1} />}
          {numberDetail}
        </ScrollTriggerReplacement>
      </h5>
      <p className="center big">{description}</p>
    </div>
  );
};

export default MetricCards;
