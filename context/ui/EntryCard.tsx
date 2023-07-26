import { Entry } from "@/interfaces"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { FC, useContext } from "react"
import { UIContext } from "./UIContext"

interface Props {
    entry: Entry
}

export const EntryCard:FC<Props> = ({entry})=>{

    const {isDragging, setIsDragging, setNotDragging} = useContext(UIContext)

    const DragStart = (event: any) => {
        event.dataTransfer.setData("text", entry._id)
        setIsDragging()
        console.log(isDragging)
    }

    return(
        <Card sx={{marginBottom: 1}} draggable onDragStart={DragStart} onDragEnd={()=>setNotDragging()}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{whiteSpace: "pre-line"}}>{entry.description}</Typography> 
                </CardContent>
                <CardActions sx={{display: "flex", justifyContent: "end", paddingRight: "2rem"}}>
                    <Typography variant="body2">Hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )

}

