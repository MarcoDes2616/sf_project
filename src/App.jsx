import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
// import Blog from "./pages/blog/Blog";
// import ProtectedRoutes from "./components/ProtectecRoutes";
// import BlogItemView from "./pages/blog/BlogItemView";
// import ResetPassword from "./pages/resetPassword/ResetPassword";
// import NotFound from "./pages/404/NotFound";
// import ModalsContainer from "./components/ModalsContainer";
// import VirtualSchool from "./pages/virtual_school/VirtualSchool";

function App() {

  return (
    <HashRouter>
      {/* <ModalsContainer /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/blog/post/:id" element={<BlogItemView />} />
        <Route path="/reset_password/:tokenReset" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/virtual_school/*" element={<VirtualSchool />} />
        </Route> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
