
import { Layout } from "../layouts"
import { Chip, Grid, Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
const generateRandomId = () => Math.floor(Math.random() * 1000);

const generateRandomLongUrl = () => `http://example${Math.floor(Math.random() * 10)}.com`;

const generateRandomShortUrl = () => `http://ex${Math.floor(Math.random() * 100)}`;

const generateRandomAmountOfClicks = () => Math.floor(Math.random() * 100);

const generateRandomDate = () => new Date(Date.now() - Math.floor(Math.random() * 10000000000));

const arrayLength = 20;

const dataArray = Array.from({ length: arrayLength }, (_, index) => ({
  id: generateRandomId(),
  long_url: generateRandomLongUrl(),
  short_url: generateRandomShortUrl(),
  amount_of_clicks: generateRandomAmountOfClicks(),
  deleted_time: generateRandomDate(),
  retrieved_time: generateRandomDate(),
}));


const columns: GridColDef []= [
  {field :'id',headerName:'ID', width: 25},
  {field :'long_url',headerName:'Url', width: 200},
  {field :'short_url',headerName:'Short Url', width: 200},
  {field :'amount_of_clicks',headerName:'Cantidad de clicks', width: 200},
  {field :'deleted_time',headerName:'Fecha de borrado', width: 200},
  {field :'retrieved_time',headerName:'Tiempo de ejecución', width: 200},
  {
      field:'is_active',
      headerName:'En uso',
      description:'Url no UserActivation',
      width:100,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderCell:(params:any)=>{
          return (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              params.row.is_active !== 0
              ? <Chip color='success' label='activa' variant='outlined' />
              : <Chip color='error' label='inactiva' variant='outlined' />
          )
      }
  }
 

]

const row = dataArray;

export const FormPage = () => {
  return (
    <Layout>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%">
         
         <Typography variant="h3"sx={{mt:1}}>Historial de Urls</Typography>
         <Grid container sx={{ height: 'calc(100vh - 200px)', width: '100%',mt:1 }}>
          <DataGrid
            rows={row}
            columns={columns}
            pagination
            pageSizeOptions={[10]}
          />

           
        </Grid>
   
         
       </Box>
    </Layout>
  )
}



