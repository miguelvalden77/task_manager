import { List, Paper } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntryStatus } from "@/interfaces"
import { FC, useContext, useMemo } from "react"
import { EntriesContext } from "../entries"
import { UIContext } from "./UIContext"
import style from "./Entry.List.module.css"

interface Props {
    status: EntryStatus
}

export const EntryList:FC<Props> = ({status})=>{

    const {isDragging, setNotDragging} = useContext(UIContext)
    const {entries, updateEntry} = useContext(EntriesContext)

    const entriesByStatus = useMemo(()=> entries.filter(entry => entry.status === status), [entries])

    const onDropEntry = (evt: any) =>{
        const id = evt.dataTransfer.getData("text")
        console.log({id})

        const entry = entries.find((ent)=> ent._id == id)! // ! es para decirle que se fíe
        entry.status = status
        updateEntry(entry)

        setNotDragging()
    }
    const allowDrop = (evt: any)=> {
        evt.preventDefault()
    }

    return(
        <div onDrop={onDropEntry} onDragOver={allowDrop} className={isDragging ? style.isDragging : ""}>
            <Paper sx={{height: "calc(100vh - 250px)", overflowX: "auto", backgroundColor: "transparent", padding: "0.25rem 0.5rem"}}>
                <List sx={{opacity: isDragging ? 0.25 : 1, transition: "opacity 0.3s" }}>
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

