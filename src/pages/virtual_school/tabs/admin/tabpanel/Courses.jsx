import React, { useEffect, useContext } from "react";
import TabPanel from "../../../utils/TabPanel";
import VirtualSchoolContext from "../../../../../context/VirtualSchoolContext";
import GenericTable from "../../../../../components/generals/GenericTable";

const Courses = ({ value, index }) => {
  const { allCourses, setModule, deleteContain, setSelected, setModal } =
    useContext(VirtualSchoolContext);

  useEffect(() => {
    setModule("courses");
  }, []);

  const handleEdit = (data) => {
    setSelected(data);
    setModal(true);
  };

  const handleDelete = (id) => {
    deleteContain(id);
  };

  const columns = [
    {
      headerName: "ID",
      field: "id",
    },
    {
      headerName: "TITULO",
      field: "title",
    },
    {
      headerName: "DESCRIPCIÓN",
      field: "description",
    },
    {
      headerName: "CAPITULOS",
      field: "videoCount",
    },
    {
      headerName: "DURACIÓN",
      field: "totalDuration",
    },
    {
      headerName: "MINIATURA",
      field: "imageUrl",
      dataRender: (value) => (
        <img
          src={value}
          alt="Poster"
          style={{ width: "80px", height: "auto" }}
        />
      ),
    },
    {
      headerName: "PRECIO",
      field: "price",
    },
    {
      headerName: "DESCUENTO",
      field: "discount",
    },
  ];

  const propsToTable = {
    data: allCourses,
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

export default Courses;
