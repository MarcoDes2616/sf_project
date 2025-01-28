import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  Box,
  Button,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const GenericTable = ({
  data,
  columns,
  handleEdit,
  handleDelete,
  actions = true,
  dataPagination,
  onPageChange,
}) => {

  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Generic Table">
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell key={index}>{col.headerName}</TableCell>
            ))}
            {actions && <TableCell>ACCIONES</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.length > 0 ? (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <TableCell key={colIndex}>
                    {col.dataRender
                      ? col.dataRender(row[col.field])
                      : row[col.field]}
                  </TableCell>
                ))}

                {actions && (
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(row)}
                      aria-label="edit"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDelete(row.id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + 1} align="center">
                No hay datos disponibles.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {dataPagination && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Button
            variant="outlined"
            disabled={dataPagination.currentPage === 1}
            onClick={() => handlePageChange(dataPagination.currentPage - 1)}
          >
            Anterior
          </Button>
          <Typography>
            Página {dataPagination.currentPage} de {dataPagination.totalPages} (
            {dataPagination.totalItems} items)
          </Typography>
          <Button
            variant="outlined"
            disabled={dataPagination.currentPage === dataPagination.totalPages}
            onClick={() => handlePageChange(dataPagination.currentPage + 1)}
          >
            Siguiente
          </Button>
        </Box>
      )}
    </TableContainer>
  );
};

export default GenericTable;
