/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  useGetActiveShortUrlQuery,
  useGetAllShortUrlQuery,
  useGetInactiveShortUrlQuery,
} from "../../store/apiSlice";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  const {
    data: activeUrls,
   
  } = useGetActiveShortUrlQuery();
  const {
    data: inActiveUrls,
    
  } = useGetInactiveShortUrlQuery();

  const { data: allUrlCreated } = useGetAllShortUrlQuery();

  const data = {
    labels: ["Creadas", "Activas", "inactivas"],
    datasets: [
      {
        label: "# de Urls",
        data: [allUrlCreated, activeUrls, inActiveUrls],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box>
      <Pie data={data} />;
    </Box>
  );
};
