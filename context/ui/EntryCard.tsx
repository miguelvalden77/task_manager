import { Entry } from "@/interfaces"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { FC, useContext } from "react"
import { UIContext } from "./UIContext"
import { useRouter } from "next/router"
import { calcularTiempoTranscurrido } from "@/utils/calcularFecha"

interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { isDragging, setIsDragging, setNotDragging } = useContext(UIContext)
    const router = useRouter()

    const DragStart = (event: any) => {
        event.dataTransfer.setData("text", entry._id)
        setIsDragging()
        console.log(isDragging)
    }

    const onClick = () => router.push(`/entry/${entry._id}`)

    return (
        <Card onClick={onClick} sx={{ marginBottom: 1 }} draggable onDragStart={DragStart} onDragEnd={() => setNotDragging()}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: "pre-line" }}>{entry.description}</Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "end", paddingRight: "2rem" }}>
                    <Typography variant="body2">Hace {calcularTiempoTranscurrido(entry.createdAt)}</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )

}

