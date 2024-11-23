import React, { createContext, useState } from "react";
import axiosInstance from "../services/axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const VirtualSchoolContext = createContext();

export const VirtualSchoolProvider = ({ children }) => {
  const [module, setModule] = useState("");
  const [view, setView] = useState("grid");
  const [allUser, setAllUser] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [allCourses, setAllCourses] = useState([])
  const [allVideos, setAllVideos] = useState([])
  const [allContain, setAllContain] = useState([])
  const [selected, setSelected] = useState("")
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const path = {
    users: "/users",
    post: "/post",
    courses: "/courses",
    videos: "/videos",
    free: "/courses/free",
    my_courses: "/courses/my_courses",
  };

  useEffect(() => {
    fetchDataByModule()
  }, [module])

  const fetchDataByModule = async() => {
    if (module === "users") {
      await getAllUsers()
    }
    if (module === "post") {
      await getAllPosts()
    }
    if (module === "courses") {
      await getAllCourses()
    }
    if (module === "videos") {
      await getAllVideos()
    }
    if (module === "free") {
      await getContain()
    }
    if (module === "my_courses") {
      await getContain()
    }
  }

  const getAllUsers = async () => {
    setLoading(true)
    return await axiosInstance.get(path.users)
    .then(res => setAllUser(res.data))
    .finally(() => setLoading(false))
  };
  
  const getAllPosts = async () => {
    setLoading(true)
    return await axiosInstance.get(path.post)
    .then(res => setAllPosts(res.data))
    .finally(() => setLoading(false))
  };

  const getAllCourses = async (flag) => {
    setLoading(true)
    return await axiosInstance.get(`${path.courses}${flag ? "?flag=true" : ""}`)
    .then(res => setAllCourses(res.data))
    .finally(() => setLoading(false))
  };

  const getAllVideos = async () => {
    setLoading(true)
    await axiosInstance.get(path.videos)
    .then(res => setAllVideos(res.data.videos))
    .finally(() => setLoading(false))
  };

  const createPost = async(data) => {
    try {
      await axiosInstance.post(path.post, data)
      Swal.fire({
        title: "Post creado correctamente",
        icon: "success",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } catch (error) {
      Swal.fire({
        title: "Error al crear un post",
        icon: "error",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } finally { 
      getAllPosts()
    }
  }

  const createUser = async(data) => {
    try {
      await axiosInstance.post(path.users, data)
      Swal.fire({
        title: "Usuario creado correctamente",
        icon: "success",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } catch (error) {
      Swal.fire({
        title: "Error al crear un Usuario",
        icon: "error",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } finally { 
      getAllUsers()
    }
  }

  const createCourse = async(data) => {
    try {
      await axiosInstance.post(path.courses, data)
      Swal.fire({
        title: "Curso creado correctamente",
        icon: "success",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } catch (error) {
      Swal.fire({
        title: "Error al crear un curso",
        icon: "error",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } finally { 
      getAllCourses()
    }
  }

  const createVideo = async(data) => {
    try {
      await axiosInstance.post(path.videos, data)
      Swal.fire({
        title: "Video creado correctamente",
        icon: "success",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } catch (error) {
      Swal.fire({
        title: "Error al crear un Video",
        icon: "error",
        confirmButtonColor: "#F89C2A",
        toast: true,
      })
    } finally { 
      getAllVideos()
    }
  }

  const getContain = async() => {
    setLoading(true)
    await axiosInstance.get(path[module])
    .then(res => setAllContain(res.data))
    .finally(() => setLoading(false))
  }

  const getCourseVideo = async(courseId) => {    
    return await axiosInstance.get(`${path.videos}${courseId && "?courseId="+courseId}`)
  }

  const handleViewChange = (event, newView) => {
    if (newView) setView(newView);
  };

  const deleteContain = async (id) => {
    try {
      await axiosInstance.delete(`/${module}/${id}`,);
      Swal.fire({
        title: "Contenido eliminado correctamente",
        icon: "success",
        confirmButtonColor: "#F89C2A",
        toast: true,
      });
    } catch (error) {
      Swal.fire({
        title: "Error al eliminar el contenido",
        icon: "error",
        confirmButtonColor: "#F89C2A",
        toast: true,
      });
    } finally {
      fetchDataByModule()
    }
  };

  const updateContain = async (id, data) => {
    try {
      await axiosInstance.put(`/${module}/${id}`, data);
      Swal.fire({
        title: "Contenido actualizado correctamente",
        icon: "success",
        confirmButtonColor: "#F89C2A",
        toast: true,
      });
    } catch (error) {
      Swal.fire({
        title: "Error al actualizar el contenido",
        icon: "error",
        confirmButtonColor: "#F89C2A",
        toast: true,
      });
    } finally {
      setSelected("")
      fetchDataByModule()
    }
  };
  
  const getFirebaseUsers = async(courseId) => {    
    return await axiosInstance.get(`/system/get_registre`)
  }

  const confirmAdmin = async() => {
    return await axiosInstance.get("system/verifyAdmin")
  }

  const functions = {
    confirmAdmin,
    setModule,
    module,
    getAllUsers,
    allUser,
    getAllPosts,
    allPosts,
    modal,
    setModal,
    createPost,
    getAllCourses,
    allCourses,
    loading,
    createCourse,
    createVideo,
    allVideos,
    allContain,
    getCourseVideo,
    view, setView,
    handleViewChange,
    updateContain,
    deleteContain,
    selected, 
    setSelected,
    createUser,
    getFirebaseUsers
  };

  return (
    <VirtualSchoolContext.Provider value={functions}>
      {children}
    </VirtualSchoolContext.Provider>
  );
};

export default VirtualSchoolContext;
