

import { UIState } from "./UIProvider";

type UIAtionType =
  | { type: "[UI]-Open SideBar" }
  | { type: "[UI]-Close SideBar" }
  | { type: "[UI]-Toggle.Theme" };

export const uiReducer = (state: UIState, action: UIAtionType): UIState => {
  switch (action.type) {
    case "[UI]-Close SideBar":
      return {
        ...state,
        isSideMenuOpen: false,
      };
    case "[UI]-Open SideBar":
      return {
        ...state,
        isSideMenuOpen: true,
      };
      case "[UI]-Toggle.Theme":
        return {
          ...state,
          //darkTheme:  darkTheme ? lightTheme : darkTheme 
        }

    default:
      return state;
  }
};
