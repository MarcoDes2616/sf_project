import React, { useEffect, useContext } from "react";
import TabPanel from "../../../utils/TabPanel";
import VirtualSchoolContext from "../../../../../context/VirtualSchoolContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import GenericTable from "../../../../../components/generals/GenericTable";

const Users = ({ value, index }) => {
  const { allUser, setModule, deleteContain, setSelected, setModal } =
    useContext(VirtualSchoolContext);

  useEffect(() => {
    setModule("users");
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
    { field: "name", headerName: "NOMBRE" },
    { field: "lastname", headerName: "APELLIDO" },
    {
      field: "birthday",
      headerName: "FECHA DE NAC.",
      dataRender: (value) => new Date(value).toLocaleDateString(),
    },
    { field: "documentNumber", headerName: "DOCUMENTO" },
    { field: "email", headerName: "EMAIL" },
    {
      field: "role",
      headerName: "ROL",
      dataRender: (value) => value.role,
    },
    {
      field: "status",
      headerName: "ESTADO",
      dataRender: (value) => (value ? "Activo" : "Inactivo"),
    },
  ];

  const propsToTable = {
    data: allUser,
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

export default Users;
