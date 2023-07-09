import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { MenuOutlined } from "@mui/icons-material"
import { useContext } from "react"
import { UIContext } from "@/context/ui"


export const Navbar = ()=>{

    const {openSideMenu} = useContext(UIContext)

    return(
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton  onClick={openSideMenu} size="large" edge="start">
                    <MenuOutlined />
                </IconButton>

                <Typography variant="h6">Task Manager</Typography>
            </Toolbar>
        </AppBar>
    )

}
