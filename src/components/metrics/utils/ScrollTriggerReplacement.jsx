import React, { useEffect, useRef } from "react";

const ScrollTriggerReplacement = ({ onEnter, onExit, children }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter();
        } else {
          onExit();
        }
      },
      {
        threshold: 0.1, // Puedes ajustar el umbral según tus necesidades.
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onEnter, onExit]);

  return <div ref={ref}>{children}</div>;
};

export default ScrollTriggerReplacement;
