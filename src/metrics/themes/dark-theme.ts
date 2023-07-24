import { createTheme } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";


const mode ='light'
export const darkTheme = createTheme({
   
        palette:{
            mode,
            ...(mode === 'light'
            ? {
                primary:deepOrange,
                divider:deepOrange[200],
                background:{
                    default:deepOrange[900],
                    paper:deepOrange[100],
                }
            }:{
                primary:amber,
                divider:amber[200],
                text:{
                    primary:'#fff',
                    secondary:grey[500],
                }
            }
            )
        }
      
})