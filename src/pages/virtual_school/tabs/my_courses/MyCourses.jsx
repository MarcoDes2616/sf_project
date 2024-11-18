import React, { useContext, useEffect } from "react";
import VirtualSchoolContext from "../../../../context/VirtualSchoolContext";
import CoursesContain from "../../utils/CoursesContain";
import Loading from "/src/components/Loading";

function MyCourses() {
  const { setModule, allContain, view, handleViewChange, loading} = useContext(VirtualSchoolContext);

  useEffect(() => {
    setModule("my_courses");
  }, [setModule]);

  const propsToCourses = {allContain, handleViewChange, view}

  return (
    <>
      <Loading loading={loading} />
      <CoursesContain {...propsToCourses} />
    </>
  );
}

export default MyCourses;
