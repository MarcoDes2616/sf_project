import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Fab, useMediaQuery } from "@mui/material";
import Users from "../tabs/admin/tabpanel/Users";
import Posts from "../tabs/admin/tabpanel/Post";
import { useContext } from "react";
import VirtualSchoolContext from "../../../context/VirtualSchoolContext";
import Courses from "../tabs/admin/tabpanel/Courses";
import Videos from "../tabs/admin/tabpanel/Videos";

export default function VerticalTabs() {
  const [value, setValue] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const { setModal } = useContext(VirtualSchoolContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setDrawerOpen(false);
    setModal(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <Box
      sx={{
        position: "relative",
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        padding: "2rem 0",
      }}
    >
      {isMobile ? (
        <>
          <Fab
            color="primary"
            aria-label="add"
            onClick={toggleDrawer}
            style={{ position: "fixed", bottom: "16px", left: "16px" }}
          >
            <MenuIcon />
          </Fab>
          <Drawer
            anchor="bottom"
            open={drawerOpen}
            onClose={toggleDrawer}
            sx={{ zIndex: 1300 }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="Usuarios" {...a11yProps(0)} />
              <Tab label="Blog" {...a11yProps(1)} />
              <Tab label="Cursos" {...a11yProps(2)} />
              <Tab label="Videos" {...a11yProps(3)} />
            </Tabs>
          </Drawer>
        </>
      ) : (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Usuarios" {...a11yProps(0)} />
          <Tab label="Blog" {...a11yProps(1)} />
          <Tab label="Cursos" {...a11yProps(2)} />
          <Tab label="Videos" {...a11yProps(3)} />
        </Tabs>
      )}
      {value == 0 && <Users value={value} index={0} />}
      {value == 1 && <Posts value={value} index={1} />}
      {value == 2 && <Courses value={value} index={2} />}
      {value == 3 && <Videos value={value} index={3} />}
    </Box>
  );
}
