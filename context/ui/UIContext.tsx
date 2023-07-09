import { createContext } from "react";

interface contextProps {
    sideMenuOpen: boolean,
    openSideMenu: ()=> void,
    closeSideMenu: ()=> void
}

export const UIContext = createContext({} as contextProps)
