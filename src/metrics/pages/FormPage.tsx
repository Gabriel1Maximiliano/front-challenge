/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { Layout } from "../layouts";
import {
  Chip,
  Grid,
  Box,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useGetUrlsQuery,
  useDeleteShortUrlMutation,
  useRedirectShortUrlMutation,
  useRestoreShortUrlMutation,
} from "../../store/apiSlice";

import { useEffect, useState } from "react";
import { DataResp } from "../interfaces/metricsInterface";



export const FormPage = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 25 },
    { field: "long_url", headerName: "Url", width: 200 },
    { field: "dateOfCreate", headerName: "Creada", width: 200 },
    {
      field: "short_url",
      headerName: "Short Url",
      width: 200,
      renderCell: (params: any) => {
        return (
          <a
            href={`http://localhost:8080/${params.row.short_url.substring(8)}`}
            target="_blank"
          >
            <Chip
              color="success"
              label={params.row.short_url}
              variant="outlined"
              onClick={() => handleRedirectUrl(params.row)}
            />
          </a>
        );
      },
    },
    { field: "amount_of_clicks", headerName: "Cant. Clicks", width: 100 },
    { field: "deleted_of_time", headerName: "Fecha de borrado", width: 200 },
    { field: "retrieved_time", headerName: "Tiempo de ejecución", width: 200 },
    {
      field: "is_active",
      headerName: "En uso",
      description: "Url no UserActivation",
      width: 100,

      renderCell: (params: any) => {
        return params.row.is_active !== 1 ? (
          <Chip
            color="success"
            label="activa"
            variant="outlined"
            onClick={() => handleRestoreAndDeleteUrl(params.row)}
          />
        ) : (
          <Chip
            color="error"
            label="inactiva"
            variant="outlined"
            onClick={() => handleRestoreAndDeleteUrl(params.row)}
          />
        );
      },
    },
  ];
  const pageSizeOptions = [10, 25, 50, 100];

  const { data, isLoading, isFetching } = useGetUrlsQuery();
  const [rows, setRows] = useState<DataResp[]>([]);
  const [deleteUrl] = useDeleteShortUrlMutation();
  const [redirectUrl] = useRedirectShortUrlMutation();
  const [restoreUrl] = useRestoreShortUrlMutation();

  const handleRedirectUrl = async (row: DataResp) => {
    const lastSlashIndex = row.short_url.lastIndexOf("/");
    const hashToSearch = row.short_url.substring(lastSlashIndex + 1);
    try {
       await redirectUrl(hashToSearch);
     
    } catch (error) {
      console.log(error);
    }
  };

  const handleRestoreAndDeleteUrl = async (row: DataResp) => {
    const lastSlashIndex = row.short_url.lastIndexOf("/");
    const hashToSearch = row.short_url.substring(lastSlashIndex + 1);
    if (row.is_active == 1) {
     
      try {
        return await restoreUrl(hashToSearch);
      } catch (error) {
        console.log(error);
      }
    } else if (row.is_active == 0) {
      
      return await deleteUrl(hashToSearch);
    }
  };

  useEffect(() => {
    if (data) {
      const transformedRows = data.map((url: any) => ({
        id: url.id,
        long_url: url.long_url,
        dateOfCreate: url.dateOfCreate,
        short_url: url.short_url,
        amount_of_clicks: url.amount_of_clicks,
        deleted_of_time: url.deleted_of_time,
        retrieved_time: url.retrieved_time,
        is_active: url.is_active,
      }));
      setRows(transformedRows);
    }
  }, [data]);

  return (
    <Layout>
      <Box display="flex" justifyContent="flex-end" padding={2}>
        {isFetching ? <Alert severity="info">Actualizando info!</Alert> : ""}
      </Box>
      {isLoading ? (
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
          <Typography variant="h3" sx={{ mt: 1 }}>
            Historial de Urls
          </Typography>
          <Grid
            container
            sx={{ height: "calc(100vh - 200px)", width: "100%", mt: 1 }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pagination
              pageSizeOptions={pageSizeOptions}
            />
          </Grid>
        </Box>
      )}
    </Layout>
  );
};
