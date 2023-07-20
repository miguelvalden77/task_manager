import { UIState } from "./UIProvider";

type UIActionType = {type: "UI - Open Sidebar"} | {type: "UI - Close Sidebar"} | {type: "UI - Show Input"} | {type: "UI - Close Input"}


export const uiReducer = (state: UIState, action: UIActionType): any=>{
    
    switch(action.type){
        case "UI - Open Sidebar":
            return {...state, sideMenuOpen: true}

        case "UI - Close Sidebar":
            return {...state, sideMenuOpen: false}

        case "UI - Show Input":
            return {...state, isAdding: true}

        case "UI - Close Input":
            return {...state, isAdding: false}

        default: return state
    }

}
