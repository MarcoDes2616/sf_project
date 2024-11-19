import React, { useEffect, useContext } from "react";
import TabPanel from "../../../utils/TabPanel";
import VirtualSchoolContext from "../../../../../context/VirtualSchoolContext";
import GenericTable from "../../../../../components/generals/GenericTable";

const Posts = ({ value, index }) => {
  const { allPosts, setModule, deleteContain, setSelected, setModal } =
    useContext(VirtualSchoolContext);

  useEffect(() => {
    setModule("post");
  }, []);

  const handleEdit = (data) => {
    setSelected(data);
    setModal(true);
  };

  const handleDelete = (id) => {
    deleteContain(id);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "Título" },
    { field: "description", headerName: "Descripción" },
    {
      field: "imageUrl",
      headerName: "Imagen",
      dataRender: (value) => (
        <img src={value} alt="Post" style={{ width: "80px", height: "auto" }} />
      ),
    },
    {
      field: "createdAt",
      headerName: "Fecha de Creación",
      dataRender: (value) => new Date(value).toLocaleDateString(),
    },
    {
      field: "user",
      headerName: "Autor",
      dataRender: (value) => `${value.name} ${value.lastname}`,
    },
    {
      field: "tag",
      headerName: "Tag",
      dataRender: (value) => value.tag,
    },
  ];
  const propsToTable = {
    data: allPosts,
    columns,
    handleDelete,
    handleEdit,
  };

  return (
    <TabPanel value={value} index={index}>
      <GenericTable {...propsToTable} />
    </TabPanel>
  );
};

export default Posts;
