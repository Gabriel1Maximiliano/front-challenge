import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette:{
        mode:'dark',
        
        primary:{
            main:'#FDFA2F'
        },
        secondary:{
        main:'#19857b'
        
        },
        error:{
            main:red.A400
        },  
    },
    components:{
        MuiAppBar:{
    defaultProps:{},
    styleOverrides:{
        root:{
          backgroundColor:'#370372'  
        }
    }
    
        }
    }
})