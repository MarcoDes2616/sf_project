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
import Loading from "../../../../../components/Loading";

const Posts = ({ value, index }) => {
  const { allPosts, setModule } = useContext(VirtualSchoolContext);
  
  useEffect(() => {
    setModule("admin_posts");
  }, []);

  const handleEdit = (postId) => {
    console.log(`Editando post con ID: ${postId}`);
  };

  const handleDelete = (postId) => {
    console.log(`Eliminando post con ID: ${postId}`);
  };

  return (
    <TabPanel value={value} index={index}>
      <TableContainer component={Paper}>
        <Table aria-label="Posts Table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Imagen</TableCell>
              <TableCell>Fecha de Creación</TableCell>
              <TableCell>Autor</TableCell>
              <TableCell>Tag</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allPosts && allPosts.length > 0 ? (
              allPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.id}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.description}</TableCell>
                  <TableCell>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      style={{ width: "80px", height: "auto" }}
                    />
                  </TableCell>
                  <TableCell>
                    {new Date(post.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{`${post.user.name} ${post.user.lastname}`}</TableCell>
                  <TableCell>{post.tag.tag}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(post.id)}
                      aria-label="edit"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDelete(post.id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No hay publicaciones disponibles.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </TabPanel>
  );
};

export default Posts;
