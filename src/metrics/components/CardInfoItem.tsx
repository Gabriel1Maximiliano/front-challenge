import { useNavigate } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

interface IProps {
  urlToNavigate: string;
  icon: JSX.Element;
  itemText: string;
}

export const CardInfoItem = ({
  urlToNavigate = "",
  icon,
  itemText,
}: IProps) => {
  const navigate = useNavigate();
  return (
    <ListItem
      onClick={() => navigate(urlToNavigate)}
      style={{ cursor: "pointer" }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={itemText} />
    </ListItem>
  );
};
