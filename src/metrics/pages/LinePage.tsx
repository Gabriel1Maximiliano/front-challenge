/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import { Layout } from "../layouts";
import { ChartLine } from "../components/ChartLine";
import { useGetActiveShortUrlQuery, useGetInactiveShortUrlQuery } from "../../store/apiSlice";

export const LinePage = () => {
  const {
    isLoading: isLoadingActive,
    isFetching: isFetchingActive,
   
  } = useGetActiveShortUrlQuery();
  const {
    isLoading: isLoadingInActive,
    isFetchingInActive,
    
  } = useGetInactiveShortUrlQuery();
  
  return (
    <Layout><>
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
      ) : ( <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Typography variant="h3">Soy Line Page</Typography>
        <ChartLine />
      </Box>)}
    </>
     
    </Layout>
  );
};
