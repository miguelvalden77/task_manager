import {FC, useReducer} from "react"
import { EntriesContext, entriesReducer } from "./"
import { Entry } from "@/interfaces"
import {v4 as uuidv4} from "uuid"


export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE:EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: "Pending: corrupti aut veniam sed ut quia tempore esse non sit, architecto aliquam.",
            createdAt: Date.now(),
            status: "Pending"
        },
        {
            _id: uuidv4(),
            description: "In progress: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, eum voluptatum distinctio sint minima soluta",
            createdAt: Date.now() + 2000000,
            status: "In progress"
        },
        {
            _id: uuidv4(),
            description: "Finished: nisi necessitatibus reprehenderit, suscipit iure? Nam delectus odit veritatis est, recusandae animi.",
            createdAt: Date.now() + 10000,
            status: "finished"
        }
    ]

}

interface Props {
    children: any,
}

export const EntriesProvider: FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

    const addNewEntry = (description: string) => {
        
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: "Pending"
        }

        dispatch({type: "Add Entry", payload: newEntry})
    }

    const updateEntry = (entry: Entry) => {

        dispatch({type: "Update Entry", payload: entry})
    }

    return(
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}