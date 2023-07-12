import { EntriesState } from "./EntriesProvider";

type UIActionType = {type: "UI - Open Sidebar"} | {type: "UI - Close Sidebar"}


export const entriesReducer = (state: EntriesState, action: UIActionType): any=>{
    
    switch(action.type){
        // case "UI - Open Sidebar":
        //     return {...state, sideMenuOpen: true}
        // break;

        // case "UI - Close Sidebar":
        //     return {...state, sideMenuOpen: false}
        // break;

        default: return state
    }

}