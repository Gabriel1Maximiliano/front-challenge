//import  BarChart  from '@mui/x-charts';
import { Layout } from "../layouts";
import { Box, Typography } from "@mui/material";

export const BarPage = () => {
  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Typography variant="h3">Soy Bar Page</Typography>
      </Box>
    </Layout>
  );
};
