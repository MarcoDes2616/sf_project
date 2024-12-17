import React, { useEffect, useContext } from "react";
import TabPanel from "../../../utils/TabPanel";
import VirtualSchoolContext from "../../../../../context/VirtualSchoolContext";
import GenericTable from "../../../../../components/generals/GenericTable";
import { helpUtil } from "../../../../../helpers/helpUtil";

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
      dataRender: (value) => (
        helpUtil.truncateText(value)
      )
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
        value ? (
          <img src={value} alt="miniatura" style={{ width: "80px", height: "auto" }} />
        ) : null
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
