/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext } from "react";

export interface ContextProps {
  isSideMenuOpen: boolean;

  //Methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  
}

export const UiContext = createContext({} as ContextProps);
