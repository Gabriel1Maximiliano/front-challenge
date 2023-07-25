/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Layout } from "../layouts";
import { Alert, Box, CircularProgress, Grid, Typography } from "@mui/material";

import BlurLinearIcon from "@mui/icons-material/BlurLinear";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";

import { ChartLine, SummaryMetrics } from "../components";
import {
  useGetActiveShortUrlQuery,
  useGetAllShortUrlQuery,
  useGetInactiveShortUrlQuery,
} from "../../store/apiSlice";

export const DashBoardPage = () => {
  const {
    data: activeUrls,
    isLoading: isLoadingActive,
    isFetching: isFetchingActive,
  } = useGetActiveShortUrlQuery();
  const {
    data: inActiveUrls,
    isLoading: isLoadingInActive,
    isFetchingInActive,
  } = useGetInactiveShortUrlQuery();

  const { data: allUrlCreated } = useGetAllShortUrlQuery();

  return (
    <Layout>
      <Box display="flex" justifyContent="flex-end" padding={2}>
        {isFetchingActive || isFetchingInActive ? (
          <Alert severity="info">Actualizando info!</Alert>
        ) : (
          ""
        )}
      </Box>

      {isLoadingActive || isLoadingInActive ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress disableShrink />
        </Box>
      ) : (
        <>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Typography variant="h3">DashBoard</Typography>
          <Grid container spacing={1}>
            <Grid container>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  mb: 4,
                }}
              >
                <ChartLine />
              </Box>

              <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Box sx={{ width: "100%" }}></Box>
              </Grid>
            </Grid>
          </Grid>
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
              title={inActiveUrls}
              subTitle={"Urls inactivas"}
              icon={<BlockOutlinedIcon color="error" sx={{ fontSize: 40 }} />}
            />
          </Grid>
          </Box>
        </>
      )}
    </Layout>
  );
};
