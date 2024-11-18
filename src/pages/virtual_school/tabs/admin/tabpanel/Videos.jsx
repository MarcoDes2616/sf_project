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

const Videos = ({ value, index }) => {
  const { allVideos, setModule } = useContext(VirtualSchoolContext);

  useEffect(() => {
    setModule("admin_videos");
  }, []);

  const handleEdit = (videoId) => {
    console.log(`Editando video con ID: ${videoId}`);
  };

  const handleDelete = (videoId) => {
    console.log(`Eliminando video con ID: ${videoId}`);
  };

  return (
    <TabPanel value={value} index={index}>
      <TableContainer component={Paper}>
        <Table aria-label="Videos Table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>URL del Video</TableCell>
              <TableCell>Duración</TableCell>
              <TableCell>Imagen</TableCell>
              <TableCell>Curso</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allVideos && allVideos.length > 0 ? (
              allVideos.map((video) => (
                <TableRow key={video.id}>
                  <TableCell>{video.id}</TableCell>
                  <TableCell>{video.title}</TableCell>
                  <TableCell>
                    <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                      Ver Video
                    </a>
                  </TableCell>
                  <TableCell>{video.duration} min</TableCell>
                  <TableCell>
                    <img
                      src={video.imageUrl}
                      alt={video.title}
                      style={{ width: "80px", height: "auto" }}
                    />
                  </TableCell>
                  <TableCell>{video.courseId}</TableCell>
                  <TableCell>{video.status ? "Activo" : "Inactivo"}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(video.id)}
                      aria-label="edit"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDelete(video.id)}
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
                  No hay videos disponibles.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </TabPanel>
  );
};

export default Videos;
