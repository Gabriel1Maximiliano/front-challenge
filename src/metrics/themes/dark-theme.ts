import { createTheme } from "@mui/material";
import {  red } from "@mui/material/colors";



export const darkTheme = createTheme({
   
    palette:{
        mode:'light',
        background:{
            default:'blue[300]'
        },
        primary:{
            main:'#9862E8'
        },
        secondary:{
        main:'#19857b'
        
        },
        error:{
            main:red.A400
        },
       
    }
      
})