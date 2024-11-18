import React from "react";
import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";

const CoursesContain = ({ allContain, handleViewChange, view }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detecta si es móvil

  return (
    <div className="free_courses_container full-w autoM">
      <Box sx={isMobile ? { padding: "20px" } : { padding: "20px 0" }}>
        {/* Mostrar los botones de alternancia solo en desktop */}
        {!isMobile && (
          <ToggleButtonGroup
            value={view}
            exclusive
            className="autoM"
            onChange={handleViewChange}
            aria-label="Vista de cursos"
            sx={{ marginBottom: "20px" }}
          >
            <ToggleButton value="grid" aria-label="Cuadro">
              <GridViewIcon />
            </ToggleButton>
            <ToggleButton value="list" aria-label="Lista">
              <ViewListIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        )}
        <Grid container spacing={3}>
          {allContain && allContain.length > 0 ? (
            allContain.map((course) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={view === "grid" || isMobile ? 4 : 12} // Solo grid en móvil
                key={course.id}
              >
                <Card
                  sx={{
                    display: view === "list" && !isMobile ? "flex" : "block",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={course.imageUrl}
                    alt={course.title}
                    sx={{
                      width: view === "list" && !isMobile ? "150px" : "100%",
                      height: view === "list" && !isMobile ? "auto" : "200px",
                    }}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{course.title}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      paragraph
                      sx={{ marginTop: "10px" }}
                    >
                      {/* Descripción más larga en desktop */}
                      {view === "list" && !isMobile
                        ? course.description.slice(0, 60) + "..."
                        : course.description.slice(0, 40) + "..."}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <strong>Videos:</strong> {course.videoCount} |{" "}
                      <strong>Duración:</strong> {course.totalDuration} min
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      href={`/#/virtual_school/course_view/${course.id}`}
                    >
                      Acceder al Curso
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body1">
              No hay cursos gratuitos disponibles.
            </Typography>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default CoursesContain;
