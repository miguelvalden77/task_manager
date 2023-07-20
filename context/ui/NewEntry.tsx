import { AddCircleOutlineOutlined, SaveOutlined } from "@mui/icons-material"
import { Box, Button, TextField } from "@mui/material"
import { ChangeEvent, FC, useContext, useState } from "react"
import { EntriesContext } from "../entries"
import { UIContext } from "./UIContext"



export const NewEntry:FC = () => {

    const {addNewEntry} = useContext(EntriesContext)
    const {setIsAddingClose, setIsAddingOpen, isAdding} = useContext(UIContext)

    const [touched, setTouched] = useState<Boolean>(false)
    const [text, setText] = useState<string>("")

    const changeText = (evt: ChangeEvent<HTMLInputElement>) => setText(evt.target.value)
    const createNewEntry = () => {
        if(text.length == 0) return
        setIsAddingClose()
        addNewEntry(text)
        setTouched(false)
        setText("")
    }

    return(
        <Box sx={{marginBottom: 2, paddingX: 2}}>

            {isAdding == false && 
            <Button onClick={()=>setIsAddingOpen()} variant="outlined" fullWidth startIcon={<AddCircleOutlineOutlined />}>
                Agregar tarea
            </Button>}

            {isAdding == true && 
            <>
                <TextField fullWidth sx={{marginTop: 2, marginBottom: 1}} autoFocus label="nueva entrada" multiline helperText={touched && text.length == 0 ? "Ingrese un valor" : ""} error={touched && text.length == 0} value={text} onChange={changeText} onBlur={()=> setTouched(true)} />

                <Box display={"flex"} justifyContent={"space-between"}>
                    <Button
                    variant="text"
                    onClick={()=>setIsAddingClose()}
                    >
                        Cancelar
                    </Button>
                    <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<SaveOutlined/>}
                    onClick={createNewEntry}
                    
                    >
                        Guardar
                    </Button>
                </Box>
            </>}
        </Box>
    )

}
