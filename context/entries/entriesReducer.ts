import { Entry } from "@/interfaces";
import { EntriesState } from "./EntriesProvider";

type EntriesActionType = {type: "Add Entry", payload: Entry}


export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState=>{
    
    switch(action.type){

        case "Add Entry":
            return {...state, entries: [...state.entries, action.payload]}
        break;

        default: return state
    }

}