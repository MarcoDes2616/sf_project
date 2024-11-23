import React, { useEffect, useContext, useState } from "react";
import TabPanel from "../../../utils/TabPanel";
import VirtualSchoolContext from "../../../../../context/VirtualSchoolContext";
import GenericTable from "../../../../../components/generals/GenericTable";

const Users = ({ value, index }) => {
  const [firebaseUsers, setFirebaseusers] = useState([])
  const { allUser, setModule, deleteContain, setSelected, setModal, getFirebaseUsers } =
    useContext(VirtualSchoolContext);

  useEffect(() => {
    setModule("users");
    fetchFirebaseUsers()
  }, []);

  const handleEdit = (data) => {
    setSelected(data);
    setModal(true);
  };

  const handleDelete = (id) => {
    deleteContain(id);
  };

  const fetchFirebaseUsers = async() => {
    try {
      const resul = await getFirebaseUsers()
      setFirebaseusers(resul.data.usuarios)
    } catch (error) {
      
    }
  }

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
  
  const firebaseColumns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "NOMBRE" },
    { field: "email", headerName: "EMAIL" },
    { field: "phone", headerName: "TELEFONO" },
    { field: "terms", headerName: "T&C", dataRender: (value) => value? "Acepta" : "Rechaza", },
    { field: "createdAt", dataRender: (value) => value.seconds, headerName: "REGISTRO" },
  ]

  const propsToTableFirebase = {
    data: firebaseUsers,
    columns: firebaseColumns,
    handleDelete,
    handleEdit,
    actions: false
  };

  return (
    <TabPanel value={value} index={index}>
      <GenericTable {...propsToTable} />
        <br /><br /><br />
      <h3>Registros de firebase</h3><br /><br />
      <GenericTable {...propsToTableFirebase} />
    </TabPanel>
  );
};

export default Users;
