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

const Users = ({ value, index }) => {
  const { allUser, setModule } = useContext(VirtualSchoolContext);

  useEffect(() => {
    setModule("admin_users");
  }, []);

  const handleEdit = (userId) => {
    console.log(`Editando usuario con ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    console.log(`Eliminando usuario con ID: ${userId}`);
  };

  return (
    <TabPanel value={value} index={index}>
      <TableContainer component={Paper}>
        <Table aria-label="Usuarios Table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Fecha de Nac.</TableCell>
              <TableCell>Documento</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUser && allUser.length > 0 ? (
              allUser.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{new Date(user.birthday).toLocaleDateString()}</TableCell>
                  <TableCell>{user.documentNumber}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role.role}</TableCell>
                  <TableCell>{user.status ? "Activo" : "Inactivo"}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(user.id)}
                      aria-label="edit"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDelete(user.id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  No hay usuarios disponibles.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </TabPanel>
  );
};

export default Users;

