import { Entry } from "@/interfaces";
import { EntriesState } from "./EntriesProvider";

type EntriesActionType = { type: "Add Entry", payload: Entry } | { type: "Update Entry", payload: Entry } | { type: "Refresh Data", payload: Entry[] } | { type: "Delete Entry", payload: string }


export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {

        case "Refresh Data":
            return { ...state, entries: [...action.payload] }

        case "Add Entry":
            return { ...state, entries: [...state.entries, action.payload] }

        case "Delete Entry":
            const entries = state.entries.filter(entry => entry._id != action.payload)
            return { ...state, entries: [...entries] }

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