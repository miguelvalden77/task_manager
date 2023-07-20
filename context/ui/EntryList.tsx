import { List, Paper } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntryStatus } from "@/interfaces"
import { FC, useContext, useMemo } from "react"
import { EntriesContext } from "../entries"

interface Props {
    status: EntryStatus
}

export const EntryList:FC<Props> = ({status})=>{

    console.log(status)

    const {entries} = useContext(EntriesContext)

    const entriesByStatus = useMemo(()=> entries.filter(entry => entry.status === status), [entries])

    return(
        <div>
            <Paper sx={{height: "calc(100vh - 250px)", overflowX: "auto", backgroundColor: "transparent", padding: "0.25rem 0.5rem"}}>
                <List sx={{opacity: "1"}}>
                    {
                        entriesByStatus.map(entry =>{
                            return <EntryCard key={entry._id} entry={entry}/>
                        })
                    }
                </List>
            </Paper>
        </div>
    )

}

