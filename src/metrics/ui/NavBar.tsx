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
            <MenuIcon data-testid="menu-icon" />
          </IconButton>
          <Typography data-testid="title-test"  style={{ marginLeft: "10px" }}>Challenge Meli</Typography>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <IconButton >
            <DarkModeIcon data-testid="dark-mode-icon" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
