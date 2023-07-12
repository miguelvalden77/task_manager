import {FC, useReducer} from "react"
import { EntriesContext, entriesReducer } from "./"


export interface EntriesState {
    entries: []
}

const ENTRIES_INITIAL_STATE:EntriesState = {
    entries: []

}

interface Props {
    children: any
}

export const UIProvider: FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

    return(
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    )
}