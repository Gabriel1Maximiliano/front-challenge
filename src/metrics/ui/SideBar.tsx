/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Box,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";

import HttpIcon from "@mui/icons-material/Http";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import { UiContext } from "../context/ui";
import { useContext } from "react";


import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import { CardInfoItem } from "../components/CardInfoItem";

export const SideBar = () => {

  const { isSideMenuOpen, closeSideMenu } = useContext(UiContext);

  return (
    <Drawer anchor="left" open={isSideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250, ml: 3 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography>Menú</Typography>
        </Box>

        <Divider />
        <CardInfoItem
          urlToNavigate="/crear-url"
          icon={<HttpIcon />}
          itemText="Crear Url"
        />
        <CardInfoItem
          urlToNavigate="/historial"
          icon={<FeedOutlinedIcon />}
          itemText="Historial"
        />
        <CardInfoItem
          urlToNavigate="/estadisticas"
          icon={<AutoGraphOutlinedIcon />}
          itemText="Estadísticas"
        />
        <CardInfoItem
          urlToNavigate="/pie"
          icon={<DonutSmallOutlinedIcon />}
          itemText="Pie Chart"
        />
        <CardInfoItem
          urlToNavigate="/line"
          icon={<QueryStatsOutlinedIcon />}
          itemText="Line Chart"
        />

        <Divider />
      </Box>
    </Drawer>
  );
};
