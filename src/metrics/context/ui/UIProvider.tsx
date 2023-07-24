import { useReducer } from "react";
import { UiContext, uiReducer } from "./";

import { darkTheme } from "../../themes/dark-theme";
import { Theme } from "@mui/material";

export interface UIState {
  isSideMenuOpen: boolean;
  darkTheme: Theme;
}

const UI_Initial_State: UIState = {
  isSideMenuOpen: false,
  darkTheme: darkTheme,
};

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const UIProvider = ({ children }: IProps): any => {
  const [state, dispatch] = useReducer(uiReducer, UI_Initial_State);

  const openSideMenu = (): void => {
    dispatch({ type: "[UI]-Open SideBar" });
  };
  const closeSideMenu = () => {
    dispatch({ type: "[UI]-Close SideBar" });
  };
  const changeTheme = () => {
    console.log("cambie en tema");
    dispatch({ type: "[UI]-Toggle.Theme" });
  };
  return (
    <UiContext.Provider
      value={{
        ...state,

        //Methods
        openSideMenu,
        closeSideMenu,
        changeTheme,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
