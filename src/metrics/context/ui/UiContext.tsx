import { createContext } from 'react';


export interface ContextProps{
    isSideMenuOpen : boolean;
    
    //Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;
    changeTheme: () => void;
}


export const UiContext = createContext({} as ContextProps);