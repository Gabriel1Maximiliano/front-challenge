import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const lightTheme: Theme = createTheme({
    palette:{
        mode:'light',
        background:{
            default:'grey[300]'
        },
        primary:{
            main:'#4a148c'
        },
        secondary:{
        main:'#19857b'
        
        },
        error:{
            main:red.A400
        },
       
    }
})