import React, { useEffect, useContext } from "react";
import TabPanel from "../../../utils/TabPanel";
import VirtualSchoolContext from "../../../../../context/VirtualSchoolContext";
import GenericTable from "../../../../../components/generals/GenericTable";

const Videos = ({ value, index }) => {
  const { allVideos, setModule, deleteContain, setSelected, setModal } =
    useContext(VirtualSchoolContext);

  useEffect(() => {
    setModule("videos");
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
    { field: "title", headerName: "TÍTULO" },
    {
      field: "videoUrl",
      headerName: "URL DEL VIDEO",
      dataRender: (value) => (
        <a href={value} target="_blank" rel="noopener noreferrer">
          Ver Video
        </a>
      ),
    },
    {
      field: "duration",
      headerName: "DURACIÓN",
      dataRender: (value) => `${value} min`,
    },
    {
      field: "imageUrl",
      headerName: "IMAGEN",
      dataRender: (value) => (
        <img
          src={value}
          alt="Imagen"
          style={{ width: "80px", height: "auto" }}
        />
      ),
    },
    { field: "courseId", headerName: "CURSO" },
    {
      field: "status",
      headerName: "ESTADO",
      dataRender: (value) => (value ? "Activo" : "Inactivo"),
    },
  ];

  const propsToTable = {
    data: allVideos,
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

export default Videos;
