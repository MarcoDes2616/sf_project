import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../services/axios";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [loading, setLoading] = useState(false)
  const [openRedirectModal, setOpenRedirectModal] = useState(false)
  const [userData, setUserData] = useState("")

  const path = {
    login: "/system/login",
    reset: "/system/reset_password",
    update_pass: "/system/update_password",
    validate_sesion: "/system/me",
  };

  const login = async (data) => {
    try {
      const response = await axiosInstance.post(path.login, data);
      return response;
    } catch (error) {

    }
  };

  const fetchRequestReset = async (data) => {
    try {
      return await axiosInstance.post(path.reset, data);
    } catch (error) {

    }
  };

  const fetchUpdatePass = async (password, token) => {
    return await axiosInstance.post(path.update_pass, { password, token });
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCustomScroll = (scroll) => {
    window.scrollTo({
      top: scroll,
      behavior: "smooth",
    });
  };

  const menuOptions = [
    { path: "/", name: "HOME" },
    { path: "/about_us", name: "NOSOTROS" },
    { path: "/blog", name: "BLOG" },
  ];

  const getMyProfile = async() => {
    await axiosInstance.get(path.validate_sesion)
      .then(res => setUserData(res.data.user))
  }

  const getAllPosts = async(tagId) => {
    console.log(tagId);
    
    return await axiosInstance.get(`/post${tagId != "" ? "?tagId=" + tagId : ""}`)
  };
  

  const icons = [
    {
      icon: <i className=' bx bxl-youtube' />,
      path: "https://youtube.com/@tradingsinfrontera?si=JV8rZWXs8R0BPnnJ",
    },
    {
      icon: <i className=' bx bxl-instagram-alt' />,
      path: "https://www.instagram.com/trading_sinfrontera?igsh=MWhoeDM0MTRpeWZ4Yw==",
    },
    {
      icon: <i className='bx bxl-tiktok ' />,
      path: "https://www.tiktok.com/@tradingsinfronter1?_t=8oar2pDr20r&_r=1",
    },
  ];

  const getThisPost = async(id) => {
    return axiosInstance.get(`/post/${id}`)
  }

  const functions = {
    handleScrollToTop,
    menuOptions,
    icons,
    handleCustomScroll,
    openModalLogin, 
    setOpenModalLogin,
    login,
    fetchRequestReset,
    fetchUpdatePass,
    openRedirectModal, 
    setOpenRedirectModal,
    userData,
    getMyProfile,
    getAllPosts,
    loading,
    setLoading,
    getThisPost,
  };

  return (
    <MainContext.Provider value={functions}>{children}</MainContext.Provider>
  );
};

export { MainContextProvider };
export default MainContext;
