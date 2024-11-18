// tabs/FreeCourses.jsx
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import VirtualSchoolContext from "../../../../context/VirtualSchoolContext";

function FreeCourses() {
  const {setModule, allFreeCourses} = useContext(VirtualSchoolContext)

  useEffect(() => {
    setModule("free")
  }, [])
  
  return (
    <div>
      Esta es la sección de Cursos Gratis
    </div>
  );
}

export default FreeCourses;
