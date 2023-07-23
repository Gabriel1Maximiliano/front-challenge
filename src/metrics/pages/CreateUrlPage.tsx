/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Layout } from "../layouts";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useCreateShortUrlMutation } from "../../store/apiSlice";
import Swal from 'sweetalert2';
import { useForm } from "../../hooks/useForm";

export const CreateUrlPage = () => {

  
  const [createShortUrl, result] = useCreateShortUrlMutation();
  const { error:httpError } = result;
  const { formState, onInputChange, error, onResetForm } = useForm({
    url: '',
    shortUlr:''
  });
  
  const showAlertError =()=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: httpError.data,
      footer: `<a href="${httpError.data.substring(50)}" target="_blank">${httpError.data.substring(50)}</a>`
    })
  }

if( httpError ){
  showAlertError();
}

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 try {
   await createShortUrl(formState.url);
  
 } catch (error) {
  console.log(error)
 }
    onResetForm();
  };





  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh", padding: 4, mb: 23 }}
        >
          <Grid
            item
           
            sx={{ backgroundColor: "#F1EFF4", padding: 3, borderRadius: 2 }}
          >
            <Typography variant="h4" sx={{ mb: 0 }}>
              Crear url
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12}>
                  <TextField
                    label="url"
                    type="text"
                    name="url"
                    value={formState.url}
                    placeholder="Crea tu url"
                    fullWidth
                    sx={{ width: '100%' }} 
                    onChange={onInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="short-url"
                    type="text"
                    name="short-url"
                    value={formState.shortUlr}
                    placeholder="Tu url es"
                    fullWidth
                    sx={{ width: '100%' }} 
                    onChange={onInputChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={!!error || (formState.url.length === 0)}
                  >
                    <Typography sx={{ mr: 1 }}>Crear</Typography>
                    <AddCircleOutlineOutlinedIcon />
                  </Button>
                  {error && (
                    <Typography sx={{ color: "red" }}>{error}</Typography>
                  )}
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};
