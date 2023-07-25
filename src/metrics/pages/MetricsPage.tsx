/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import FunctionsIcon from "@mui/icons-material/Functions";
import { Alert, Box, CircularProgress, Grid, Typography } from "@mui/material";
import { Layout } from "../layouts";
import BlurLinearIcon from "@mui/icons-material/BlurLinear";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import { SummaryMetrics } from "../components/SummaryMetrics";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import {
  useGetActiveShortUrlQuery,
  useGetInactiveShortUrlQuery,
  useGetAllShortUrlQuery,
  useGetUrlsQuery,
} from "../../store/apiSlice";
import { useEffect, useState } from "react";
import { handleClicksAverage, handleCreationTimeAverage } from "../../utils";

export const MetricsPage = () => {
  const { data, isFetching } = useGetUrlsQuery();
  const [clicksAverage, setClicksAverage] = useState(0);
  const [timeAverage, setTimeAverage] = useState(0n);
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
  useEffect(() => {
    handleClicksAverage(data, setClicksAverage);
  }, [isFetching]);

  useEffect(() => {
    return handleCreationTimeAverage(data, setTimeAverage);
  }, [isFetching]);

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
        <Box
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
              title={timeAverage.toString()}
              subTitle={"T de creación(seg)"}
              icon={<AdsClickIcon color="info" sx={{ fontSize: 40 }} />}
            />
            <SummaryMetrics
              title={clicksAverage}
              subTitle={"Promedio clicks"}
              icon={<FunctionsIcon color="info" sx={{ fontSize: 40 }} />}
            />
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
      )}
    </Layout>
  );
};
