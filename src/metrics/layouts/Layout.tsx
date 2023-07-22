import { Box, Typography } from "@mui/material"
import { NavBar } from "../ui/NavBar";
import { SideBar } from "../ui/SideBar";

interface IProps {
    title?:string;
    children: JSX.Element| JSX.Element[];
}
export const Layout = ({children}:IProps) => {
  return (
    <Box sx={{ flexFLow:1,mt:'0' }} >
        <NavBar />
        <SideBar />
       
        <Box sx={{ padding:'10px 20px' }} >
            { children }
        </Box>
    </Box>
  )
}
