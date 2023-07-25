/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Box from "@mui/material/Box";
import {
  useGetActiveShortUrlQuery,
  useGetInactiveShortUrlQuery,
  useGetAllShortUrlQuery,
} from "../../store/apiSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Alert, CircularProgress } from "@mui/material";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Gráfico de barras",
    },
  },
};

const labels = ["Creadas", "Activas", "Inactivas"];

export const ChartLine = () => {
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

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [allUrlCreated, activeUrls, inActiveUrls],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
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
       <Box>

         <Bar options={options} data={data} />
       </Box>
        
      )}
    </>
  );
};
