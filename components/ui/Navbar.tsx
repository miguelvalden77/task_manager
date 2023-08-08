import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { MenuOutlined } from "@mui/icons-material"
import { useContext } from "react"
import { UIContext } from "@/context/ui"
import NextLink from "next/link"


export const Navbar = () => {

    const { openSideMenu } = useContext(UIContext)

    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton onClick={openSideMenu} size="large" edge="start">
                    <MenuOutlined />
                </IconButton>

                <NextLink href={"/"} passHref>
                    <Link underline="none" color={"white"}>
                        <Typography variant="h6">Task Manager</Typography>
                    </Link>
                </NextLink>
            </Toolbar>
        </AppBar>
    )

}
