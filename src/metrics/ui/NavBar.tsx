import { UiContext } from "../context/ui";
import { useContext } from "react";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const NavBar = () => {
  const { openSideMenu } = useContext(UiContext);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ justifyContent: "space-between" }}
    >
      <Toolbar>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large" onClick={openSideMenu}>
            <MenuIcon />
          </IconButton>
          <Typography style={{ marginLeft: "10px" }}>Challenge Meli</Typography>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <IconButton >
            <DarkModeIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
