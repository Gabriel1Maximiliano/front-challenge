/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { Layout } from "../layouts";
import BlurLinearIcon from "@mui/icons-material/BlurLinear";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import { SummaryMetrics } from "../components/SummaryMetrics";
import { useGetActiveShortUrlQuery,useGetInactiveShortUrlQuery,useGetAllShortUrlQuery } from "../../store/apiSlice";



export const MetricsPage = () => {

   const { data:activeUrls, isLoading:isLoadingActive } = useGetActiveShortUrlQuery();
   const { data:inActiveUrls, isLoading:isLoadingInActive } = useGetInactiveShortUrlQuery();
  
   const { data:allUrlCreated } = useGetAllShortUrlQuery();

  return (
    <Layout>
{
  isLoadingActive || isLoadingInActive ? ( <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh" 
  >
    <CircularProgress disableShrink />
  </Box>)
:
(<Box
  display="flex"
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  height="100%"
>
  <Typography variant="h3">Estadísticas Generales</Typography>

  <Grid
    container
    spacing={2}
    justifyContent="center"
    alignItems="center"
    marginTop={10}
  >
    <SummaryMetrics
      title={allUrlCreated}
      subTitle={"Urls creadas"}
      icon={<BlurLinearIcon color="info" sx={{ fontSize: 40 }} />}
    />
    <SummaryMetrics
      title={activeUrls}
      subTitle={"Urls activas"}
      icon={
        <ToggleOnOutlinedIcon color="success" sx={{ fontSize: 40 }} />
      }
    />
    <SummaryMetrics
      title={ inActiveUrls }
      subTitle={"Urls inactivas"}
      icon={<BlockOutlinedIcon color="error" sx={{ fontSize: 40 }} />}
    />
  </Grid>
</Box>)
}

      
    </Layout>
  );
};
