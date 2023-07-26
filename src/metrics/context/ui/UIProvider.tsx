/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer } from "react";
import { UiContext, uiReducer } from "./";

import { lightTheme } from "../../themes";

export interface UIState {
  isSideMenuOpen: boolean;
  currentMode: any;
}

const UI_Initial_State: UIState = {
  isSideMenuOpen: false,
  currentMode: lightTheme,
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

  return (
    <UiContext.Provider
      value={{
        ...state,

        //Methods
        openSideMenu,
        closeSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
