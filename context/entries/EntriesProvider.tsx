import { FC, useEffect, useReducer } from "react"
import { EntriesContext, entriesReducer } from "./"
import { Entry } from "@/interfaces"
import { v4 as uuidv4 } from "uuid"
import entriesApi from "@/apis/entriesApi"


export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: []

}

interface Props {
    children: any,
}

export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

    const addNewEntry = async (description: string) => {

        const { data } = await entriesApi.post("/entries/allEntries", { description })
        console.log(data)

        dispatch({ type: "Add Entry", payload: data.entry })
    }

    const updateEntry = (entry: Entry) => {

        dispatch({ type: "Update Entry", payload: entry })
    }

    const refreshEntries = async () => {
        const { data } = await entriesApi<Entry[]>("/entries/allEntries")

        dispatch({ type: "Refresh Data", payload: data })
    }

    useEffect(() => {
        refreshEntries()
    }, [])

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}