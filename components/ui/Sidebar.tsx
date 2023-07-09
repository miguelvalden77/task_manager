import { Box, Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material"
import InboxOutLinedIcon from "@mui/icons-material/InboxOutlined"
import MailOutlineOutLinedIcon from "@mui/icons-material/MailOutlineOutlined"
import { useContext } from "react"
import { UIContext } from "@/context/ui"

const list: string[] = ["Inbox", "Starred", "Send Email", "Draft"]

export const Sidebar = ()=>{

    const {sideMenuOpen, closeSideMenu} = useContext(UIContext)

    return(
        <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
            <Box sx={{width: 250}}>
                <Box sx={{padding: "5px 10px"}}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <List>
                    {
                        list.map((text, index)=>{
                            return(
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 ? <InboxOutLinedIcon /> : <MailOutlineOutLinedIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            )
                        })
                    }
                </List>
                <Divider />
                <List>
                    {
                        list.map((text, index)=>{
                            return(
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 ? <InboxOutLinedIcon /> : <MailOutlineOutLinedIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>
        </Drawer>
    )
}
