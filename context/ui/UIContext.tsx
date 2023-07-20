import { createContext } from "react";

interface contextProps {
    sideMenuOpen: boolean,
    isAdding: boolean,
    openSideMenu: ()=> void,
    closeSideMenu: ()=> void,
    setIsAddingClose: ()=> void,
    setIsAddingOpen: ()=> void
}

export const UIContext = createContext({} as contextProps)
