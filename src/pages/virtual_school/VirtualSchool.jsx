import { Routes, Route } from "react-router-dom";
import MyCourses from "./tabs/my_courses/MyCourses";
import FreeCourses from "./tabs/free/FreeCourses";
import Profile from "./tabs/profile/Profile";
import NavBarSchool from "./navbar_school/NavBarSchool";
import "./virtualschool.css";
import Admin from "./tabs/admin/Admin";
import { VirtualSchoolProvider } from "../../context/VirtualSchoolContext";
import CourseView from "./tabs/course_view/CourseView";

function VirtualSchool() {
  
  return (
    <VirtualSchoolProvider>
      <div className="virtual_school_container flex column">
        <NavBarSchool />
        <Routes>
          <Route path="my_courses" element={<MyCourses />} />
          <Route path="free" element={<FreeCourses />} />
          <Route path="profile" element={<Profile />} />
          <Route path="admin" element={<Admin />} />
          <Route path="course_view/:courseId" element={<CourseView />} />
        </Routes>
      </div>
    </VirtualSchoolProvider>
  );
}

export default VirtualSchool;
