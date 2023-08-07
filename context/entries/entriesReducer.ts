import { Entry } from "@/interfaces";
import { EntriesState } from "./EntriesProvider";

type EntriesActionType = { type: "Add Entry", payload: Entry } | { type: "Update Entry", payload: Entry } | { type: "Refresh Data", payload: Entry[] }


export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {

        case "Refresh Data":
            return { ...state, entries: [...action.payload] }

        case "Add Entry":
            return { ...state, entries: [...state.entries, action.payload] }

        case "Update Entry":
            return {
                ...state, entries: state.entries.map((entry) => {

                    if (entry._id == action.payload._id) {
                        entry.description = action.payload.description
                        entry.status = action.payload.status
                    }

                    return entry
                })
            }

        default: return state
    }

}