import { createContext } from "react";

interface contextProps {
    sideMenuOpen: boolean,
    isAdding: boolean,
    isDragging: boolean,
    openSideMenu: ()=> void,
    closeSideMenu: ()=> void,
    setIsAddingClose: ()=> void,
    setIsAddingOpen: ()=> void,
    setIsDragging: ()=> void,
    setNotDragging: ()=> void
}

export const UIContext = createContext({} as contextProps)
