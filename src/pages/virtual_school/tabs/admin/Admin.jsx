import React, { useEffect } from "react";
import VerticalTabs from "../../utils/VerticalTabs";
import CreatePost from "../../modals/CreatePost";
import { useContext } from "react";
import VirtualSchoolContext from "../../../../context/VirtualSchoolContext";
import FloatingBtn from "../../utils/FloatingBtn";
import Loading from "../../../../components/Loading";
import CreateCourse from "../../modals/CreateCourse";
import CreateVideo from "../../modals/CreateVideo";
import CreateUser from "../../modals/CreateUser";
import { useNavigate } from "react-router-dom";
import authService from "../../../../services/authServices";

const Admin = () => {
  const navigate = useNavigate()
  const {
    modal,
    setModal,
    module,
    createPost,
    loading,
    createCourse,
    createVideo,
    selected,
    setSelected,
    createUser,
    confirmAdmin
  } = useContext(VirtualSchoolContext);

  useEffect(() => {
    verifyRole()
  }, [])

  const verifyRole = async() => {
    try {
      await confirmAdmin()
    } catch (error) {
      authService.actionLogout()
    }
  }


  const toggleModal = () => {
    setModal((current) => !current);
    setSelected("")
  };
  
  return (
    <>
      <div className="admin_container flex column full-w autoM">
        <VerticalTabs />
      </div>
      <Loading loading={loading} />
      <FloatingBtn openModal={toggleModal} />
      {module == "post" && (
        <CreatePost 
          open={modal} 
          onClose={toggleModal}
          onSubmit={createPost} 
          selected={selected}
          setSelected={setSelected}
          />
      )}
      {module == "courses" && (
        <CreateCourse
          open={modal}
          onClose={toggleModal}
          onSubmit={createCourse}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      {module == "videos" && (
        <CreateVideo
          open={modal}
          onClose={toggleModal}
          onSubmit={createVideo}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      {module == "users" && (
        <CreateUser
          open={modal}
          onClose={toggleModal}
          onSubmit={createUser}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </>
  );
};

export default Admin;
