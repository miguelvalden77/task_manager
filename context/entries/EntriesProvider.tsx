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

    const updateEntry = async (entry: Entry) => {

        try {
            const { data } = await entriesApi.put<Entry>(`/entry/${entry._id}`, { description: entry.description, status: entry.status })
            dispatch({ type: "Update Entry", payload: entry })
        }
        catch (error) {
            console.log({ error })
        }
    }

    const deleteEntry = async (entryId: string) => {
        try {
            const { data } = await entriesApi.delete<Entry>(`/entry/${entryId}`)
            dispatch({ type: "Delete Entry", payload: data._id })
        }
        catch (error) {
            console.log(error)
        }
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
            updateEntry,
            deleteEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}