import {FC, useReducer} from "react"
import { UIContext } from "./UIContext"
import { uiReducer } from "./uiReducer"

export interface UIState {
    sideMenuOpen: boolean
}

const UI_INITIAL_STATE:UIState = {
    sideMenuOpen: false

}

interface Props {
    children: any
}

export const UIProvider: FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = (): any=> {
        dispatch({type: "UI - Open Sidebar"})
    }

    const closeSideMenu = (): any => dispatch({type: "UI - Close Sidebar"})

    return(
        <UIContext.Provider value={{
            ...state,
            openSideMenu,
            closeSideMenu
        }}>
            {children}
        </UIContext.Provider>
    )
}