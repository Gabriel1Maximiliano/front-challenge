import { Box, Typography } from "@mui/material";
import { Layout } from "../layouts";

export const PiePage = () => {
  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Typography variant="h3">Soy Pie Page</Typography>
      </Box>
    </Layout>
  );
};
