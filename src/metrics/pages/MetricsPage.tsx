import { Box, Grid, Typography } from "@mui/material";
import { Layout } from "../layouts";
import BlurLinearIcon from "@mui/icons-material/BlurLinear";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import { SummaryMetrics } from "../components/SummaryMetrics";
export const MetricsPage = () => {
  return (
    <Layout>
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
            title={500}
            subTitle={"Urls creadas"}
            icon={<BlurLinearIcon color="info" sx={{ fontSize: 40 }} />}
          />
          <SummaryMetrics
            title={450}
            subTitle={"Urls activas"}
            icon={
              <ToggleOnOutlinedIcon color="success" sx={{ fontSize: 40 }} />
            }
          />
          <SummaryMetrics
            title={50}
            subTitle={"Urls inactivas"}
            icon={<BlockOutlinedIcon color="error" sx={{ fontSize: 40 }} />}
          />
        </Grid>
      </Box>
    </Layout>
  );
};
