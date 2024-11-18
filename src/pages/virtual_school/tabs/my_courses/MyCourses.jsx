import React, { useContext, useEffect } from "react";
import VirtualSchoolContext from "../../../../context/VirtualSchoolContext";
import CoursesContain from "../../utils/CoursesContain";

function MyCourses() {
  const { setModule, allContain, view, handleViewChange} = useContext(VirtualSchoolContext);

  useEffect(() => {
    setModule("my_courses");
  }, [setModule]);

  const propsToCourses = {allContain, handleViewChange, view}

  return (
    <CoursesContain {...propsToCourses} />
  );
}

export default MyCourses;
