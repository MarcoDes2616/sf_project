import React, { useState } from "react";
import {
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";


const FilterComponent = ({setTagId, tagId}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const blogFilters = [
    { id: "", category: "Todos"},
    { id: 1, category: "Trading" },
    { id: 2, category: "Análisis" },
    { id: 3, category: "Resultados" },
    { id: 4, category: "Clases" },
    { id: 5, category: "Gestión" },
  ];

  const handleFilterSelect = (category) => {
    setTagId(category);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="filter-container">
      {isMobile ? (
        <>
          <IconButton onClick={handleMenuOpen} className="filter-icon">
            <FilterListIcon fontSize="large" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {blogFilters.map((filter) => (
              <MenuItem
                key={filter.id}
                onClick={() => handleFilterSelect(filter.id)}
                className={`menu-item ${
                  tagId === filter.id ? "selected" : ""
                }`}
              >
                {filter.category}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <div className="desktop-filters">
          {blogFilters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => handleFilterSelect(filter.id)}
              className={`desktop-filter-button ${
                tagId === filter.id ? "selected" : ""
              }`}
            >
              {filter.category}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
